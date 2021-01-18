import { useEffect, useState } from "react";
import axios from "axios";
import useWindowSize from "../hooks/useWindowSize";
import Header from "../components/header";
import AppBar from "../components/appBar";
import Drawer from "../components/drawer";
import LangButtons from "../components/langButtons";
import HamburguerIcon from "../components/icons/hamburguer";
import MastHead from "../components/sections/masthead";
import AboutMe from "../components/sections/aboutMe";
import SoftwareProjects from "../components/sections/softwareProjects";
import CreativeProjects from "../components/sections/creativeProjects";
import Contact from "../components/sections/contact";
import Footer from "../components/footer";
import contents from "../contents";

export async function getStaticProps() {
  try {
    const { data } = await axios.post(
      "https://api.github.com/graphql",
      {
        query: `{ user (login: "brucegalvez") {
        repositories (first: 20, privacy: PUBLIC, isFork: false) {
          nodes {
            id
            name
            description
            url
            languages (first:3) {
              nodes {
                name
        } } } } } }
      `,
      },
      { headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` } }
    );
    return {
      props: { repositories: data.data.user.repositories },
    };
  } catch (error) {
    console.log(error);
  }
  return { props: { repositories: [] } };
}

const HomePage = (repositories) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const { width } = useWindowSize(true);

  useEffect(() => {
    if (width > 768) setIsDrawerOpen(false);
  }, [width]);

  // useEffect(() => {
  // console.log(repositories.repositories.nodes); // Github data
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
