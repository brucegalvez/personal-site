import PropTypes from "prop-types";

const Footer = ({ footerText }) => (
  <footer className="pb-4 text-gray-600 text-sm flex justify-center">
    <p>{footerText}</p>
  </footer>
);

Footer.propTypes = {
  footerText: PropTypes.string.isRequired,
};

export default Footer;
