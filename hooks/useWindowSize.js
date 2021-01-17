import { useState, useEffect } from "react";

function getWindowSize() {
  if (!process.browser) {
    return {};
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const debounce = (callback, ms) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback();
    }, ms);
  };
};

export default function useWindowSize(debounced = false) {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };
    const debouncedHandleResize = debounce(() => {
      setWindowSize(getWindowSize());
    }, 100);

    window.addEventListener(
      "resize",
      debounced ? debouncedHandleResize : handleResize
    );
    return () =>
      window.removeEventListener(
        "resize",
        debounced ? debouncedHandleResize : handleResize
      );
  }, []);

  return windowSize;
}
