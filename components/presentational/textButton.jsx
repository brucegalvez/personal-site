import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTextButton = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 200ms;
  color: ${({ theme }) => theme.colors.secondary.main};
  border-radius: 0.375rem;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.secondary.main};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary.main};
    color: #111827;
  }
`;

const TextButton = ({ text, action }) => (
  <StyledTextButton type="button" onClick={action}>
    {text}
  </StyledTextButton>
);

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

TextButton.defaultProps = {
  action: null,
};

export default TextButton;
