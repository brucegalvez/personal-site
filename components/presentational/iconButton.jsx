import PropTypes from "prop-types";
import styled from "styled-components";

const StyledIconButton = styled.div`
  transition-duration: 200ms;
  color: #4b5563;
  width: 3rem;
  fill: currentColor;
  :hover {
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

const IconButton = ({ children, href }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <StyledIconButton>{children}</StyledIconButton>
  </a>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired,
};

export default IconButton;
