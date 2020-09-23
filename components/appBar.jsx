import PropTypes from "prop-types";
import TextButton from "./textButton";

const AppBar = ({ sections, language }) => (
  <>
    <nav
      className="
      fixed z-10 h-16 w-full md:flex hidden items-center justify-end
      bg-gray-700 bg-opacity-75 hover:bg-opacity-100 hover:bg-gray-800 
      border-0 shadow-xl hover:shadow-md transform duration-200"
    >
      <div className="flex flex-row pr-3 items-center justify-end">
        <span className="flex-grow"></span>
        {sections.map(({ id, en, es }) => (
          <a
            key={id}
            href={`#${id}`}
            className="mx-4 cursor-pointer hover:underline
            hover:text-pink-500 transform duration-200"
          >
            {language === "en" ? en : es}
          </a>
        ))}
        <TextButton text={"Resume"} action={() => window.open("cv.pdf")} />
      </div>
    </nav>
    <div className="hidden md:block h-16"></div>
  </>
);

AppBar.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  sections: PropTypes.array.isRequired,
};

export default AppBar;
