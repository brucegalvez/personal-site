import { useState } from "react";
import PropTypes from "prop-types";
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

const Masthead = ({ language, contents }) => {
  const [currentLabel, setCurrenLabel] = useState(1);
  const [isAble, setIsAble] = useState(true);

  const handleMouseOver = () => {
    if (!isAble) return;
    setIsAble(false);
    setTimeout(
      () =>
        setCurrenLabel((prev) =>
          prev === contents.mainTexts.labels[language].length - 1 ? 1 : prev + 1
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
              {contents.mainTexts.labels[language][0] +
                contents.mainTexts.labels[language][currentLabel]}
            </h1>
          </div>
        </div>
        <TextButton
          text={contents.mainTexts.mastheadTexts.cta[language]}
          action={() => window.open("mailto:rodrigobrucegalvez@gmail.com")}
        />
      </div>
    </StyledMasthead>
  );
};

Masthead.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  contents: PropTypes.shape().isRequired,
};

export default Masthead;
