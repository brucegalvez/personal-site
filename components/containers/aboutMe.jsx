import PropTypes from "prop-types";
import Section from "../presentational/section";

const AboutMe = ({ language, contents }) => (
  <Section centered id={contents.mainTexts.sectionTitles[0].id}>
    <div
      className="rounded overflow-hidden shadow-xl px-6 py-4 
      sm:p-12 sm:max-w-4xl max-w-sm transition duration-200 hover:shadow-lg"
    >
      <h2 className="md:text-2xl text-xl">
        {contents.mainTexts.sectionTitles[0][language]}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-8">
        <p className="sm:col-span-4 self-center leading-6 text-gray-400 text-base mb-4">
          {contents.mainTexts.aboutMe[language]}
        </p>
        <div className="bg-pink-200 rounded-lg h-48 w-48 justify-self-center sm:justify-self-end sm:col-span-2">
          <img
            className="h-48 w-48 rounded-lg object-cover image hover:image-hover"
            src="/profile_picture.jpg"
            alt="profile_picture"
          />
        </div>
      </div>
    </div>
  </Section>
);

AboutMe.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  contents: PropTypes.shape().isRequired,
};

export default AboutMe;
