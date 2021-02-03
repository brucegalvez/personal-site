import { useEffect, useState } from "react";
import getDataFromGithub from "../utils/getDataFromGithub";
import useWindowSize from "../hooks/useWindowSize";
import Header from "../components/header";
import AppBar from "../components/containers/appBar";
import Drawer from "../components/containers/drawer";
import LangButtons from "../components/presentational/langButtons";
import HamburguerIcon from "../components/icons/hamburguer";
import MastHead from "../components/containers/masthead";
import AboutMe from "../components/containers/aboutMe";
import SoftwareProjects from "../components/containers/softwareProjects";
import CreativeProjects from "../components/containers/creativeProjects";
import Contact from "../components/containers/contact";
import Footer from "../components/footer";
import contents from "../contents";

export async function getStaticProps() {
  const repositories = await getDataFromGithub();
  return { props: { repositories } };
}

const HomePage = (repositories) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const { width } = useWindowSize(true);

  useEffect(() => {
    if (width > 768) setIsDrawerOpen(false);
  }, [width]);

  // useEffect(() => {
  //   console.log("??", repositories.repositories.nodes); // Github data
  // }, []);

  return (
    <div className="bg-gray-800 font-mono text-gray-200">
      <Header siteTitle={contents.mainTexts.siteTitle[language]} />
      <AppBar sections={contents.mainTexts.sectionTitles} language={language} />
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
      <LangButtons setLanguage={setLanguage} />
      <MastHead language={language} contents={contents} />
      <AboutMe language={language} contents={contents} />
      <SoftwareProjects
        language={language}
        contents={contents}
        repositories={repositories.repositories.nodes}
      />
      <CreativeProjects language={language} contents={contents} />
      <Contact language={language} contents={contents} />
      <Footer footerText={contents.mainTexts.footer[language]} />
    </div>
  );
};

export default HomePage;
