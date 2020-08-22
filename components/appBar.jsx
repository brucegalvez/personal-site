import Button from "./button";
const AppBar = ({ scrollToSection, sections }) => (
  <>
    <nav
      className="
      fixed z-10 h-16 w-full border-0
      border-white text-white
      hidden items-center justify-end
      bg-gray-600 bg-opacity-75
      md:flex
      shadow-xl
      hover:bg-opacity-100 hover:bg-gray-700 hover:shadow-md
      transform duration-200"
    >
      <div className="flex flex-row pr-3 items-center justify-end">
        <span className="flex-grow"></span>
        {sections.map((section) => (
          <a
            key={section}
            className="mx-4 hover:underline cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            {section}
          </a>
        ))}
        <Button text={"Resume"} action={() => window.open("cv.pdf")} />
      </div>
    </nav>
    <div className="hidden md:block h-16"></div>
  </>
);

export default AppBar;
