import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  overflow: hidden;
  position: relative;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 200ms;
  max-width: 24rem;
  max-height: 100%;
  border-radius: 0.25rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  :hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const Card = ({ children, ref, ...props }) => (
  <StyledCard ref={ref} {...props}>
    {children}
  </StyledCard>
);

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

export default Card;
