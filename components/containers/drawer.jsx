import { Transition } from "@tailwindui/react";
import PropTypes from "prop-types";
import TextButton from "../presentational/textButton";

const Drawer = ({ isDrawerOpen, sections, language }) => (
  <Transition
    show={isDrawerOpen}
    className="flex fixed items-center justify-center z-10
    h-screen p-2 w-48 bg-gray-700 shadow-xl hover:shadow-md right-0
  "
    enter="transform transition ease-in-out duration-500 sm:duration-700"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 sm:duration-700"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
  >
    <div className="flex items-center flex-col">
      {sections.map(({ id, en, es }) => (
        <a
          key={id}
          href={`#${id}`}
          className="text-center my-8 cursor-pointer no-underline
                  transform duration-200 hover:underline hover:text-pink-500"
        >
          {language === "en" ? en : es}
        </a>
      ))}
      <TextButton text="Resume" action={() => window.open("cv.pdf")} />
    </div>
  </Transition>
);

Drawer.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  sections: PropTypes.node.isRequired,
  language: PropTypes.oneOf(["es", "en"]).isRequired,
};

export default Drawer;
