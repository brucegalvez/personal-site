import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  padding-bottom: 1rem;
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.25rem;
  justify-content: center;
`;

const Footer = ({ footerText }) => (
  <StyledFooter>
    <p>{footerText}</p>
  </StyledFooter>
);

Footer.propTypes = {
  footerText: PropTypes.string.isRequired,
};

export default Footer;
