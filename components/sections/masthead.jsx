import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Section from "../section";

const Masthead = ({ language, contents }) => {
  const [currentLabel, setCurrenLabel] = useState(1);
  const [isAble, setIsAble] = useState(true);

  return (
    <Section centered>
      <div className="sm:px-12 px-6">
        <p>{contents.mainTexts.mastheadTexts.hello[language]}</p>
        <div className="max-w-6xl md:h-64 sm:h-40 h-40">
          <div className={`md:text-5xl sm:text-3xl text-2xl`}>
            <h1>{contents.mainTexts.name}</h1>
            <h1
              className="transform duration-200 text-white hover:text-gray-800"
              onMouseOver={
                isAble
                  ? () => {
                      setIsAble(false);
                      setTimeout(
                        () =>
                          setCurrenLabel(
                            currentLabel ==
                              contents.mainTexts.labels[language].length - 1
                              ? 1
                              : currentLabel + 1
                          ),
                        200
                      );
                      setTimeout(() => setIsAble(true), 600);
                    }
                  : () => {}
              }
            >
              {contents.mainTexts.labels[language][0] +
                contents.mainTexts.labels[language][currentLabel]}
            </h1>
          </div>
        </div>
        <Button
          text={contents.mainTexts.mastheadTexts.cta[language]}
          action={() => {
            window.open("mailto:rodrigobrucegalvez@gmail.com");
          }}
        />
      </div>
    </Section>
  );
};

Masthead.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  contents: PropTypes.node.isRequired,
};

export default Masthead;
