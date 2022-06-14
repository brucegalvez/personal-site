import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../components/projectCard";

const StyledSoftwareProjects = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.sectionPadding}
  > .container {
    max-width: 72rem;
    width: 100%;
    > .title {
      margin-bottom: 1rem;
      font-size: 1.25rem;
      line-height: 1.75rem;
      text-align: center;
      @media (min-width: 768px) {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }
    > .repositories {
      margin-bottom: 2rem;
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 1rem;
      @media (min-width: 640px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      @media (min-width: 1280px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  }
`;

const SoftwareProjects = ({ repositories }) => {
  const filteredRepos = repositories?.filter(({ id }) =>
    [
      "MDEwOlJlcG9zaXRvcnkyNDU1MjI5MDM=",
      "MDEwOlJlcG9zaXRvcnkyNDc4NDQ5Njc=",
      "MDEwOlJlcG9zaXRvcnkyNTk0NjU4NzE=",
      "MDEwOlJlcG9zaXRvcnkyODk1NjY2MDk=",
      "MDEwOlJlcG9zaXRvcnkyOTYxNzg0MDg=",
      "MDEwOlJlcG9zaXRvcnkzMTA0NTIwOTg=",
    ].includes(id)
  );

  return (
    <StyledSoftwareProjects id="software">
      <div className="container">
        <h2 className="title">Projects</h2>
        <div className="repositories">
          {filteredRepos?.map((repo) => (
            <Card repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </StyledSoftwareProjects>
  );
};

SoftwareProjects.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SoftwareProjects;
