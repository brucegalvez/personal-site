import PropTypes from "prop-types";
import styled from "styled-components";
import IconButton from "../components/presentational/iconButton";
import TwitterIcon from "../components/icons/twitter";
import GithubIcon from "../components/icons/github";
import LinkedinIcon from "../components/icons/linkedin";
import BehanceIcon from "../components/icons/behance";

const StyledContact = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.sectionPadding}
  > .container {
    max-width: 72rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > .title {
      margin-bottom: 1rem;
      text-align: center;
    }
    > .links {
      gap: 1rem;
      display: grid;
      width: 20rem;
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
`;

const Contact = ({ language, contents }) => (
  <StyledContact id={contents.mainTexts.sectionTitles[3].id}>
    <div className="container">
      <h2 className="title">{contents.mainTexts.sectionTitles[3][language]}</h2>
      <div className="links">
        <IconButton href="https://twitter.com/brucegalvez" size="12">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/brucegalvez/" size="12">
          <LinkedinIcon />
        </IconButton>
        <IconButton href="https://github.com/brucegalvez/" size="12">
          <GithubIcon />
        </IconButton>
        <IconButton href="https://www.behance.net/brucegalvez" size="12">
          <BehanceIcon />
        </IconButton>
      </div>
    </div>
  </StyledContact>
);

Contact.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  contents: PropTypes.shape().isRequired,
};

export default Contact;
