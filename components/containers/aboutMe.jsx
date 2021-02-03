import PropTypes from "prop-types";
import Section from "../presentational/section";

const AboutMe = ({ language, contents }) => {
  return (
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
  );
};

AboutMe.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  contents: PropTypes.object.isRequired,
};

export default AboutMe;
