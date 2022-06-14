import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import getDataFromGithub from "../utils/getDataFromGithub";
import useWindowSize from "../hooks/useWindowSize";
import Head from "../sections/head";
import AppBar from "../sections/appBar";
import Drawer from "../sections/drawer";
import LangButtons from "../components/langButtons";
import HamburguerIcon from "../components/icons/hamburguer";
import MastHead from "../sections/masthead";
import AboutMe from "../sections/aboutMe";
import SoftwareProjects from "../sections/softwareProjects";
import Contact from "../sections/contact";
import Footer from "../sections/footer";

export async function getStaticProps() {
  const data = await getDataFromGithub();
  return { props: { data } };
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

const HomePage = ({ data }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const { width } = useWindowSize(true);

  useEffect(() => {
    if (width > 768) setIsDrawerOpen(false);
  }, [width]);

  return (
    <>
      <Head />
      <StyledIndexPage>
        <Drawer isDrawerOpen={isDrawerOpen} />
        <LangButtons setLanguage={setLanguage} />
        <header>
          <AppBar />
          <HamburguerIcon
            isOpen={isDrawerOpen}
            openFunc={setIsDrawerOpen}
            className="hamburguerIcon"
          />
        </header>
        <main>
          <MastHead />
          <AboutMe bio={data?.bio} avatarUrl={data?.avatarUrl} />
          <SoftwareProjects repositories={data?.repositories.nodes} />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </StyledIndexPage>
    </>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default HomePage;
