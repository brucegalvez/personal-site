import styled from "styled-components";
import TextButton from "../components/presentational/textButton";

const StyledAppBar = styled.nav`
  display: none;
  position: fixed;
  z-index: 10;
  background-color: #374151;
  --bg-opacity: 0.75;
  transition-duration: 200ms;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-width: 0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  @media (min-width: 768px) {
    display: flex;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.background};
    --bg-opacity: 1;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  > .container {
    display: flex;
    padding-right: 0.75rem;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    > .grow {
      flex-grow: 1;
    }
    > .link {
      margin-left: 1rem;
      margin-right: 1rem;
      transition-duration: 200ms;
      cursor: pointer;
      :hover {
        color: #ec4899;
      }
    }
  }
`;

const AppBar = () => (
  <>
    <StyledAppBar>
      <div className="container">
        <span className="grow" />
        <TextButton text="Resume" action={() => window.open("cv.pdf")} />
      </div>
    </StyledAppBar>
    <div className="hidden md:block h-16" />
  </>
);

export default AppBar;
