import { useEffect, useState } from "react";
import Head from "next/head";
import Section from "../components/section";
import AppBar from "../components/appBar";
import Drawer from "../components/drawer";
import Card from "../components/card";
import Button from "../components/button";
import IconButton from "../components/iconButton";
import TwitterIcon from "../components/icons/twitter";
import GithubIcon from "../components/icons/github";
import LinkedinIcon from "../components/icons/linkedin";
import BehanceIcon from "../components/icons/behance";
import HamburguerIcon from "../components/icons/hamburguer";
import contents from "../contents";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const HomePage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [currentLabel, setCurrenLabel] = useState(1);
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const scrollToSection = (id) => {
    document.querySelector("." + id).scrollIntoView({
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
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>{contents.mainTexts.siteTitle[language]}</title>
      </Head>
      <AppBar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        sections={contents.mainTexts.sectionTitles}
        language={language}
      />
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
      <div
        className="flex flex-col fixed z-20"
        style={{ right: "1rem", bottom: 0 }}
      >
        {["es", "en"].map((option) => (
          <button
            className="rounded-full text-xs uppercase border-gray-200 border-2
              hover:bg-gray-200 hover:text-gray-800 transform duration-200
              h-8 w-8 mb-4 flex items-center justify-center"
            key={option}
            onClick={() => setLanguage(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <Section centered>
        <div className="sm:px-12 px-6">
          <p>{contents.mainTexts.mastheadTexts.hello[language]}</p>
          <div className="max-w-6xl md:h-64 sm:h-40 h-40">
            <h1
              className={`md:text-5xl sm:text-3xl text-2xl`}
              onMouseOver={() => {
                setCurrenLabel(
                  currentLabel == contents.mainTexts.labels[language].length - 1
                    ? 1
                    : currentLabel + 1
                );
              }}
            >
              {contents.mainTexts.name}
              <br></br>
              {contents.mainTexts.labels[language][0] +
                contents.mainTexts.labels[language][currentLabel]}
            </h1>
          </div>
          <Button
            text={contents.mainTexts.mastheadTexts.cta[language]}
            action={() => {
              window.open("mailto:rodrigobrucegalvez@gmail.com");
            }}
          />
        </div>
      </Section>

      <Section centered id={contents.mainTexts.sectionTitles[0].id}>
        <div
          className="rounded overflow-hidden shadow-xl px-6 py-4
          sm:p-12 sm:max-w-4xl max-w-sm transition duration-200 hover:shadow-lg"
        >
          <h2 className="md:text-2xl text-xl">
            {contents.mainTexts.sectionTitles[0][language]}
          </h2>
          <p className="leading-6 text-gray-400 text-base">
            {contents.mainTexts.aboutMe[language]}
          </p>
        </div>
      </Section>

      <Section centered id={contents.mainTexts.sectionTitles[1].id}>
        <h2 className="md:text-2xl text-xl mb-4 text-center">
          {contents.mainTexts.sectionTitles[1][language]}
        </h2>
        <div
          className="
          grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
        >
          {contents.softwarePortfolio.map(
            ({ url, title, description, tags }) => (
              <Card
                url={url}
                key={title}
                title={title}
                description={description[language]}
                tags={tags}
              />
            )
          )}
        </div>
      </Section>

      <Section centered id={contents.mainTexts.sectionTitles[2].id}>
        <h2 className="md:text-2xl text-xl mb-4 text-center">
          {contents.mainTexts.sectionTitles[2][language]}
        </h2>
        <div
          className="
            grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
        >
          {contents.creativePortfolio.map(
            ({ url, imgSrc, title, description, tags }) => (
              <Card
                url={url}
                key={title}
                imgSrc={imgSrc}
                title={title}
                description={description[language]}
                tags={tags}
              />
            )
          )}
        </div>
      </Section>

      <Section centered id={contents.mainTexts.sectionTitles[3].id}>
        <h2 className="mb-4 text-center">
          {contents.mainTexts.sectionTitles[3][language]}
        </h2>
        <div className="grid gap-4 grid-cols-4">
          <IconButton href={"https://twitter.com/brucegalvez"} size="12">
            <TwitterIcon />
          </IconButton>
          <IconButton
            href={"https://www.linkedin.com/in/brucegalvez/"}
            size="12"
          >
            <LinkedinIcon />
          </IconButton>
          <IconButton href={"https://github.com/brucegalvez/"} size="12">
            <GithubIcon />
          </IconButton>
          <IconButton href={"https://www.behance.net/brucegalvez"} size="12">
            <BehanceIcon />
          </IconButton>
        </div>
      </Section>

      <footer className="pb-4 text-gray-600 text-sm flex justify-center">
        <p>{contents.mainTexts.footer[language]}</p>
      </footer>
    </div>
  );
};

export default HomePage;
