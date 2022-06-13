import styled from "styled-components";
import PropTypes from "prop-types";

const StyledText = styled.div`
  font-size: ${({ size }) =>
    !size || size > 8
      ? ""
      : [
          "0.5rem",
          "0.75rem",
          "0.875rem",
          "1rem",
          "1.125rem",
          "1.5rem",
          "2rem",
          "3rem",
          "4.5rem",
        ][size]};
  margin: 0;
  ${({ theme, fontFamily }) =>
    fontFamily ? `font-family: ${theme.font[fontFamily].regular}` : ""};
  padding: 0;
  white-space: ${({ noWrap }) => (noWrap ? "nowrap" : "initial")};
  /* line-height: ${({ size }) => `${size * 0.5}rem`}; */
  margin-bottom: ${({ gutterBottom, size }) =>
    gutterBottom ? `${size * 0.3}rem` : "0"};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
`;

const Text = ({
  noWrap,
  tag,
  size,
  weight,
  children,
  align,
  gutterBottom,
  color,
  className,
  fontFamily,
  ...props
}) => (
  <StyledText
    size={size}
    weight={weight}
    as={tag}
    align={align}
    noWrap={noWrap}
    gutterBottom={gutterBottom}
    className={`cui-text ${className}`}
    color={color}
    fontFamily={fontFamily}
    {...props}
  >
    {children}
  </StyledText>
);
Text.propTypes = {
  noWrap: PropTypes.bool,
  tag: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"]),
  size: PropTypes.number,
  weight: PropTypes.oneOf([
    "light",
    "regular",
    "medium",
    "bold",
    "italic",
    "italicMedium",
  ]),
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  gutterBottom: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
      ])
    ),
  ]),
  color: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  noWrap: false,
  gutterBottom: false,
  children: "",
  fontFamily: "body",
  color: "",
  tag: "p",
  size: 3,
  weight: "regular",
  align: "inherit",
  className: "",
};

export default Text;
