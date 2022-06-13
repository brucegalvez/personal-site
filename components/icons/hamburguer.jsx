import styled from "styled-components";

const StyledHamburguerIcon = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const HamburguerIcon = ({ isOpen, openFunc, className, style }) => {
  return (
    <StyledHamburguerIcon
      className={`inline-block cursor-pointer ${className}`}
      style={style}
      onClick={() => {
        openFunc(!isOpen);
      }}
    >
      {[
        "-rotate-45 -translate-x-2 translate-y-2",
        "bg-opacity-0",
        "rotate-45 -translate-x-2 -translate-y-2",
      ].map((line) => {
        return (
          <div
            key={line}
            className={`
            w-8 h-1 bg-white my-1 transform duration-400
            ${isOpen ? line : ""}`}
          ></div>
        );
      })}
    </StyledHamburguerIcon>
  );
};
export default HamburguerIcon;
