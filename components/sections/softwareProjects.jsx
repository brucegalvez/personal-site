import PropTypes from "prop-types";
import Section from "../section";
import Card from "../card";

const SoftwareProjects = ({ language, contents, repositories }) => (
  <Section centered id={contents.mainTexts.sectionTitles[1].id}>
    <h2 className="md:text-2xl text-xl mb-4 text-center">
      {contents.mainTexts.sectionTitles[1][language]}
    </h2>
    <div className="grid gap-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {repositories
        .filter(({ id }) =>
          [
            "MDEwOlJlcG9zaXRvcnkyNDU1MjI5MDM=",
            "MDEwOlJlcG9zaXRvcnkyNDc4NDQ5Njc=",
            "MDEwOlJlcG9zaXRvcnkyNTk0NjU4NzE=",
            "MDEwOlJlcG9zaXRvcnkyODk1NjY2MDk=",
            "MDEwOlJlcG9zaXRvcnkyOTYxNzg0MDg=",
            "MDEwOlJlcG9zaXRvcnkzMTA0NTIwOTg=",
          ].includes(id)
        )
        .map(({ url, name, description, languages }) => (
          <Card
            url={url}
            key={name}
            title={name}
            description={description}
            tags={languages.nodes?.map((item) => item.name)}
          />
        ))}
    </div>
  </Section>
);

SoftwareProjects.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  contents: PropTypes.shape().isRequired,
  repositories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SoftwareProjects;
