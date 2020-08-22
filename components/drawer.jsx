import Button from "./button";

const Drawer = ({ open, sections }) => {
  return (
    <div
      className={`flex fixed items-center justify-center z-10
        h-screen p-2 w-48 transition duration-200 bg-gray-700 shadow-xl hover:shadow-md
        ${open ? "right-0 transform" : "-right-48 transform"}
      `}
    >
      <div className={`flex items-center flex-col`}>
        {sections.map((section) => (
          <a
            key={section}
            className="text-center my-8 cursor-pointer no-underline hover:underline"
            onClick={() => scrollToSection("about")}
          >
            {section}
          </a>
        ))}
        <Button text={"Resume"} action={() => window.open("cv.pdf")} />
      </div>
    </div>
  );
};

export default Drawer;
