import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { ExternalLink, Eye } from "react-feather";
import styled from "styled-components";
import Card from "./presentational/card";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const StyledProjectCard = styled(Card)`
  transition: opacity 200ms ease-in-out;
  > .imageWrapper {
    background-color: #fbcfe8;
    > .image {
      transition-duration: 300ms;
      width: 100%;
      filter: grayscale(50%) contrast(1) brightness(80%);
      mix-blend-mode: multiply;
      :hover,
      :focus {
        filter: none;
        mix-blend-mode: normal;
      }
    }
  }
  > .text {
    display: grid;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    height: 100% auto;
    > .title {
      display: flex;
      margin-bottom: 0.5rem;
      justify-content: space-between;
      align-items: center;
      color: #e5e7eb;
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 700;
    }
    > .description {
      padding-bottom: 1.5rem;
      color: #6b7280;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    > .data {
      display: flex;
      margin-right: 1rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      > .tag {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        margin: 0.25rem;
        background-color: #6b7280;
        color: #1f2937;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 600;
        border-radius: 9999px;
        > .colorCode {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 9999px;
          margin-right: 0.5rem;
        }
      }
      > .stat {
        display: flex;
        margin: 0.25rem;
        color: #6b7280;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 600;
        align-items: center;
      }
      > .externalLink {
        display: flex;
        transition-duration: 200ms;
        color: #4b5563;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 9999px;
        fill: currentColor;
        :hover {
          background-color: #374151;
          color: #db2777;
        }
      }
    }
  }
`;

const ProjectCard = ({ repo }) => {
  const [showingCard, setShowingCard] = useState(false);
  const { url, name, description, languages, repositoryTopics } = repo;
  const tags = [
    ...languages?.nodes,
    ...repositoryTopics?.nodes?.map(({ topic }) => topic),
  ];
  const id = repo.id.replace(/[^a-zA-Z0-9 ]/g, "");
  const stats = [];
  const imgSrc =
    repo.openGraphImageUrl &&
    repo.openGraphImageUrl !==
      "https://avatars.githubusercontent.com/u/22420945?s=400&v=4"
      ? repo.openGraphImageUrl
      : undefined;

  useIntersectionObserver({
    selectors: [`#project-${id}`],
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
    <StyledProjectCard
      style={{ opacity: showingCard ? 1 : 0 }}
      id={`project-${id}`}
    >
      {imgSrc && (
        <div className="imageWrapper">
          <img className="image" src={imgSrc} alt={name} />
        </div>
      )}
      <div className="text">
        <p className="title">{name}</p>
        {description && <p className="description">{description}</p>}
        <div className="data">
          {tags?.map((tag) => (
            <span key={tag.name} className="tag">
              {tag.color && (
                <span
                  className="colorCode"
                  style={{ backgroundColor: tag.color }}
                />
              )}
              {tag.name}
            </span>
          ))}
          {stats.views && (
            <span className="stat">
              <Eye height="1rem" />
              <span>{stats.views}</span>
            </span>
          )}
          <span className="flex-grow" />
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <div className="externalLink">
                <ExternalLink height="1rem" />
              </div>
            </a>
          )}
        </div>
      </div>
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  repo: PropTypes.shape().isRequired,
};

ProjectCard.defaultProps = {};

export default ProjectCard;
