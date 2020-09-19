import PropTypes from "prop-types";
import Section from "../section";
import Card from "../card";

const SoftwareProjects = ({ language, contents }) => (
  <Section centered id={contents.mainTexts.sectionTitles[1].id}>
    <h2 className="md:text-2xl text-xl mb-4 text-center">
      {contents.mainTexts.sectionTitles[1][language]}
    </h2>
    <div
      className="
        grid gap-4 
        xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
    >
      {contents.softwarePortfolio.map(({ url, title, description, tags }) => (
        <Card
          url={url}
          key={title}
          title={title}
          description={description[language]}
          tags={tags}
        />
      ))}
    </div>
  </Section>
);

SoftwareProjects.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  contents: PropTypes.object.isRequired,
};

export default SoftwareProjects;
