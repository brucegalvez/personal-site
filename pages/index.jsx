import { useEffect, useState } from "react";
import Header from "../components/header";
import AppBar from "../components/appBar";
import Drawer from "../components/drawer";
import Language from "../components/language";
import HamburguerIcon from "../components/icons/hamburguer";
import MastHead from "../components/sections/masthead";
import AboutMe from "../components/sections/aboutMe";
import SoftwareProjects from "../components/sections/softwareProjects";
import CreativeProjects from "../components/sections/creativeProjects";
import Contact from "../components/sections/contact";
import Footer from "../components/footer";
import contents from "../contents";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const HomePage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const scrollToSection = (id) => {
    document.querySelector("." + id).scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);

    if (dimensions.width > 768) setIsDrawerOpen(false);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <div className="bg-gray-800 font-mono text-gray-200">
      <Header siteTitle={contents.mainTexts.siteTitle[language]} />
      <AppBar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        sections={contents.mainTexts.sectionTitles}
        language={language}
      />
      <Drawer
        isDrawerOpen={isDrawerOpen}
        sections={contents.mainTexts.sectionTitles}
        language={language}
      />
      <HamburguerIcon
        isOpen={isDrawerOpen}
        openFunc={setIsDrawerOpen}
        className="mr-8 md:hidden fixed right-0 z-20"
        style={{ top: "1rem" }}
      />
      <Language setLanguage={setLanguage} />
      <MastHead language={language} contents={contents} />
      <AboutMe language={language} contents={contents} />
      <SoftwareProjects language={language} contents={contents} />
      <CreativeProjects language={language} contents={contents} />
      <Contact language={language} contents={contents} />
      <Footer footerText={contents.mainTexts.footer[language]} />
    </div>
  );
};

export default HomePage;
