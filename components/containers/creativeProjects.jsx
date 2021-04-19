import PropTypes from "prop-types";
import Section from "../presentational/section";
import Card from "../presentational/card";

const CreativeProjects = ({ language, contents, projects }) => (
  <Section centered id={contents.mainTexts.sectionTitles[2].id}>
    <h2 className="md:text-2xl text-xl mb-4 text-center">
      {contents.mainTexts.sectionTitles[2][language]}
    </h2>
    <div
      className="
        grid gap-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-8"
    >
      {projects
        .filter(({ url }) =>
          [
            "https://www.behance.net/gallery/46672199/Bruce-%28estructuras%29-Logo",
            "https://www.behance.net/gallery/46667585/Wario-Bros-in-Orion",
            "https://www.behance.net/gallery/22124047/Nocito-Tribute",
            "https://www.behance.net/gallery/91595691/Nivel-A-Timeline",
            "https://www.behance.net/gallery/56268541/Isla-Comun-Logo",
            "https://www.behance.net/gallery/22125679/Chaman",
          ].includes(url)
        )
        .map(({ url, imgSrc, title, stats }) => (
          <Card
            url={url}
            key={title}
            imgSrc={imgSrc}
            title={title}
            stats={stats}
          />
        ))}
    </div>
    <a
      href="https://www.behance.net/brucegalvez"
      target="_blank"
      rel="noreferrer"
    >
      <p className="md:text-lg text-base text-center w-full hover:underline">
        See my other creative projects
      </p>
    </a>
  </Section>
);

CreativeProjects.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  contents: PropTypes.shape().isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default CreativeProjects;
