import Link from "next/link";
import styled from "styled-components";
import Illustration404 from "../assets/illustration404";
import TextButton from "../components/presentational/textButton";

const Styled404 = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #1f2937;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (min-width: 640px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  @media (min-width: 768px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  @media (min-width: 1024px) {
    padding: 6rem;
  }
  > .container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    > .leftPanel {
      color: #e5e7eb;
      font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
        monospace;
      text-align: center;
      max-width: 36rem;
      @media (min-width: 768px) {
        text-align: left;
      }
      > .404 {
        font-size: 1.5rem;
        line-height: 2rem;
        @media (min-width: 768px) {
          font-size: 3.75rem;
          line-height: 1;
        }
      }
      > .notExists {
        font-size: 1.5rem;
        line-height: 2rem;
        @media (min-width: 768px) {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
      }
      > .goBack {
        margin-bottom: 1.5rem;
        font-size: 1rem;
        line-height: 1.5rem;
        @media (min-width: 768px) {
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }
    }
    > .rightPanel {
      width: 50%;
      max-width: 36rem;
    }
  }
`;

const Custom404 = () => (
  <Styled404>
    <div className="container">
      <div className="leftPanel">
        <h1 className="404">404</h1>
        <h1 className="notExists">This page doesn&apos;t exist</h1>
        <p className="goBack">Wanna go back to the main page?</p>
        <Link href="/">
          <div>
            <TextButton text="Go Back Home" />
          </div>
        </Link>
      </div>
      <div className="rightPanel">
        <Illustration404 />
      </div>
    </div>
  </Styled404>
);

export default Custom404;
