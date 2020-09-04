import Section from "../section";
import IconButton from "../iconButton";
import TwitterIcon from "../icons/twitter";
import GithubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";
import BehanceIcon from "../icons/behance";

const Contact = ({ language, contents }) => (
  <Section centered id={contents.mainTexts.sectionTitles[3].id}>
    <h2 className="mb-4 text-center">
      {contents.mainTexts.sectionTitles[3][language]}
    </h2>
    <div className="grid gap-4 grid-cols-4">
      <IconButton href={"https://twitter.com/brucegalvez"} size="12">
        <TwitterIcon />
      </IconButton>
      <IconButton href={"https://www.linkedin.com/in/brucegalvez/"} size="12">
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
);

export default Contact;
