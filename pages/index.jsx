import { useEffect, useState } from "react";
import Header from "../components/Header";
import AppBar from "../components/AppBar";
import Drawer from "../components/Drawer";
import LangButtons from "../components/LangButtons";
import HamburguerIcon from "../components/icons/hamburguer";
import MastHead from "../components/sections/Masthead";
import AboutMe from "../components/sections/AboutMe";
import SoftwareProjects from "../components/sections/SoftwareProjects";
import CreativeProjects from "../components/sections/CreativeProjects";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import contents from "../contents";

const HomePage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const debounce = (fn, ms) => {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  };

  const scrollToSection = (selector) => {
    document.querySelector(selector).scrollIntoView({
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
        sections={contents.mainTexts.sectionTitles}
        language={language}
        scrollToSection={scrollToSection}
      />
      <Drawer
        isDrawerOpen={isDrawerOpen}
        sections={contents.mainTexts.sectionTitles}
        scrollToSection={scrollToSection}
        language={language}
      />
      <HamburguerIcon
        isOpen={isDrawerOpen}
        openFunc={setIsDrawerOpen}
        className="mr-8 md:hidden fixed right-0 z-20"
        style={{ top: "1rem" }}
      />
      <LangButtons setLanguage={setLanguage} />
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
