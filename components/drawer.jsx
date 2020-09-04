import Button from "./button";
import Link from "next/link";

const Drawer = ({ isDrawerOpen, sections, language }) => (
  <div
    className="flex fixed items-center justify-center z-10 transform
        h-screen p-2 w-48 transition duration-200 bg-gray-700
        shadow-xl hover:shadow-md
      "
    style={isDrawerOpen ? { right: 0 } : { right: "-48rem" }}
  >
    <div className={`flex items-center flex-col`}>
      {sections.map(({ id, en, es }) => (
        <Link key={id} href="#[id]" as={`/#${id}`}>
          <a
            className="text-center my-8 cursor-pointer no-underline
          transform duration-200 hover:underline hover:text-pink-500"
          >
            {language === "en" ? en : es}
          </a>
        </Link>
      ))}
      <Button text={"Resume"} action={() => window.open("cv.pdf")} />
    </div>
  </div>
);

export default Drawer;
