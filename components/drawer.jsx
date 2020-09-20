import PropTypes from "prop-types";
import TextButton from "./textButton";
import Link from "next/link";

const Drawer = ({ isDrawerOpen, sections, language, scrollToSection }) => (
  <div
    className="flex fixed items-center justify-center z-10 transform
        h-screen p-2 w-48 transition duration-200 bg-gray-700
        shadow-xl hover:shadow-md
      "
    style={isDrawerOpen ? { right: 0 } : { right: "-48rem" }}
  >
    <div className={`flex items-center flex-col`}>
      {sections.map(({ id, en, es }) => (
        <a
          key={id}
          onClick={() => scrollToSection(`#${id}`)}
          className="text-center my-8 cursor-pointer no-underline
                  transform duration-200 hover:underline hover:text-pink-500"
        >
          {language === "en" ? en : es}
        </a>
      ))}
      <TextButton text={"Resume"} action={() => window.open("cv.pdf")} />
    </div>
  </div>
);

Drawer.proptypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  sections: PropTypes.node.isRequired,
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default Drawer;
