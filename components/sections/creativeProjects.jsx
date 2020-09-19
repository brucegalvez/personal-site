import PropTypes from "prop-types";
import Section from "../Section";
import Card from "../Card";

const CreativeProjects = ({ language, contents }) => (
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
);

CreativeProjects.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  contents: PropTypes.node.isRequired,
};

export default CreativeProjects;
