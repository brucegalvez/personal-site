import { useState } from "react";
import styled from "styled-components";
import TextButton from "../components/presentational/textButton";

const StyledMasthead = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.sectionPadding}
  > .container {
    max-width: 72rem;
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    @media (min-width: 640px) {
      padding-left: 3rem;
      padding-right: 3rem;
    }
    > .copy {
      max-width: 72rem;
      height: 10rem;
      @media (min-width: 640px) {
        height: 10rem;
      }
      @media (min-width: 768px) {
        height: 16rem;
      }
      > .bigCopy {
        font-size: 1.5rem;
        line-height: 2rem;
        @media (min-width: 640px) {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        @media (min-width: 768px) {
          font-size: 3rem;
          line-height: 1;
        }
        > .changingCopy {
          transition-duration: 200ms;
          color: #ffffff;
          :hover {
            color: #1f2937;
          }
        }
      }
    }
  }
`;

const Masthead = () => {
  const [activeHeadlineIdx, setActiveHeadlineIdx] = useState(0);
  const [isAble, setIsAble] = useState(true);
  const headlines = [
    "a Fullstack Web Developer.",
    "also a Marketer and Designer.",
    "the walrus. Goo goo g'joob.",
  ];

  const handleMouseOver = () => {
    if (!isAble) return;
    setIsAble(false);
    setTimeout(
      () =>
        setActiveHeadlineIdx((prev) =>
          prev === headlines.length - 1 ? 0 : prev + 1
        ),
      200
    );
    setTimeout(() => setIsAble(true), 600);
  };

  return (
    <StyledMasthead>
      <div className="container">
        <p>Hi, my name is</p>
        <div className="copy">
          <div className="bigCopy">
            <h1>Rodrigo Bruce Galvez</h1>
            <h1
              className="changingCopy"
              onFocus={() => null}
              onMouseOver={handleMouseOver}
            >
              I am {headlines[activeHeadlineIdx]}
            </h1>
          </div>
        </div>
        <TextButton
          text="Send an Email"
          action={() => window.open("mailto:rodrigobrucegalvez@gmail.com")}
        />
      </div>
    </StyledMasthead>
  );
};

export default Masthead;
