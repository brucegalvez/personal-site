import NextHead from "next/head";
import PropTypes from "prop-types";

const Head = ({ siteTitle }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg" href="/favicon.svg" />
    <title>{siteTitle}</title>
  </NextHead>
);

Head.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Head;
