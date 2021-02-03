import Head from "next/head";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg" href="/favicon.svg" />
    <title>{siteTitle}</title>
  </Head>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
