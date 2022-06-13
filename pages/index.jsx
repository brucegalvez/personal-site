import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import getDataFromGithub from "../utils/getDataFromGithub";
import getDataFromBehance from "../utils/getDataFromBehance";
import useWindowSize from "../hooks/useWindowSize";
import Head from "../components/head";
import AppBar from "../sections/appBar";
import Drawer from "../sections/drawer";
import LangButtons from "../components/langButtons";
import HamburguerIcon from "../components/icons/hamburguer";
import MastHead from "../sections/masthead";
import AboutMe from "../sections/aboutMe";
import SoftwareProjects from "../sections/softwareProjects";
import Contact from "../sections/contact";
import Footer from "../components/footer";
import contents from "../contents";

export async function getStaticProps() {
  const repositories = await getDataFromGithub();
  const behanceProjects = await getDataFromBehance();
  return { props: { repositories, behanceProjects } };
}

const StyledIndexPage = styled.div`
  /* background-color: #1f2937; */
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary.main};
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
    monospace;
  header > .hamburguerIcon {
    top: 1rem;
    position: fixed;
    right: 0;
    z-index: 20;
    margin-right: 2rem;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const HomePage = ({ repositories }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const { width } = useWindowSize(true);

  useEffect(() => {
    if (width > 768) setIsDrawerOpen(false);
  }, [width]);

  return (
    <>
      <Head siteTitle={contents.mainTexts.siteTitle[language]} />
      <StyledIndexPage>
        <Drawer
          isDrawerOpen={isDrawerOpen}
          sections={contents.mainTexts.sectionTitles}
          language={language}
        />
        <LangButtons setLanguage={setLanguage} />
        <header>
          <AppBar
            sections={contents.mainTexts.sectionTitles}
            language={language}
          />
          <HamburguerIcon
            isOpen={isDrawerOpen}
            openFunc={setIsDrawerOpen}
            className="hamburguerIcon"
          />
        </header>
        <main>
          <MastHead language={language} contents={contents} />
          <AboutMe language={language} contents={contents} />
          <SoftwareProjects
            language={language}
            contents={contents}
            repositories={repositories.nodes}
          />
          <Contact language={language} contents={contents} />
        </main>
        <footer>
          <Footer footerText={contents.mainTexts.footer[language]} />
        </footer>
      </StyledIndexPage>
    </>
  );
};

HomePage.propTypes = {
  repositories: PropTypes.shape().isRequired,
};

export default HomePage;
