import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { ExternalLink, Eye } from "react-feather";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Card = ({ url, imgSrc, title, description, tags, stats }) => {
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
      className={`max-w-sm rounded max-h-full overflow-hidden relative shadow-xl transition duration-200 hover:shadow-lg
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
      <div className="px-6 py-4 grid" style={{ height: "100% auto" }}>
        <span className="flex items-center justify-between mb-2">
          <p className="font-bold text-xl text-gray-200">{title}</p>
        </span>
        {description && (
          <p className="text-gray-500 text-base pb-6">{description}</p>
        )}
        <div className="text-sm flex flex-row items-center mr-4 flex-wrap w-full">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-800 m-1"
              >
                {tag}
              </span>
            ))}
          {stats.views && (
            <span className="flex items-center text-xs font-semibold text-gray-500 m-1">
              <Eye height="1rem" />
              <span>{stats.views}</span>
            </span>
          )}
          <span className="flex-grow" />
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <div
                className="fill-current rounded-full transform duration-200
                  items-center justify-center flex text-gray-600 hover:text-pink-600 
                  w-8 h-8 hover:bg-gray-700
                  "
              >
                <ExternalLink height="1rem" />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  stats: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
  imgSrc: null,
  description: "",
  tags: [],
  stats: [],
};

export default Card;
