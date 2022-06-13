import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLangButtons = styled.div`
  display: flex;
  position: fixed;
  z-index: 20;
  flex-direction: column;
  .button {
    display: flex;
    margin-bottom: 1rem;
    transition-duration: 200ms;
    color: ${({ theme }) => theme.colors.secondary.main};
    font-size: 0.75rem;
    line-height: 1rem;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.secondary.main};
    :hover {
      background-color: ${({ theme }) => theme.colors.secondary.main};
      color: #111827;
    }
  }
`;

const LangButtons = ({ setLanguage }) => (
  <StyledLangButtons style={{ right: "1rem", bottom: 0 }}>
    {["es", "en"].map((option) => (
      <button
        type="button"
        className="button"
        key={option}
        onClick={() => setLanguage(option)}
      >
        {option}
      </button>
    ))}
  </StyledLangButtons>
);

LangButtons.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};

export default LangButtons;
