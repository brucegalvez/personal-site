import { useState, useRef } from "react";
import PropTypes from "prop-types";
import LaunchIcon from "./icons/launch";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Card = ({ url, imgSrc, title, description, tags }) => {
  const [showingCard, setShowingCard] = useState();
  const cardRef = useRef();

  useIntersectionObserver({
    refs: [cardRef],
    callback: ({ isIntersecting }) => {
      if (isIntersecting) {
        setShowingCard(true);
      } else {
        setShowingCard(false);
      }
    },
    options: {
      threshold: [0.5],
    },
  });

  return (
    <div
      ref={cardRef}
      className={`max-w-sm ounded overflow-hidden relative shadow-xl transition duration-200 hover:shadow-lg
      ${showingCard ? "opacity-100" : "opacity-0"}`}
    >
      {imgSrc && (
        <div className="bg-pink-200">
          <img
            className="w-full transform duration-300 image hover:image-hover"
            src={imgSrc}
            alt={title}
          />
        </div>
      )}
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2 text-gray-200">{title}</p>
        <p className="text-gray-500 text-base">{description}</p>
      </div>
      <div className="h-24" />
      <div
        className="text-sm flex flex-row items-center w-9/12 mr-4 flex-wrap absolute"
        style={{ left: "1.5rem", bottom: "1.5rem" }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-800 m-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="absolute" style={{ right: "1.5rem", bottom: "1.5rem" }}>
        <a href={url}>
          <div className="fill-current transform duration-200 text-gray-600 hover:text-pink-500 w-4">
            <LaunchIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Card.defaultProps = {
  imgSrc: null,
};

export default Card;
