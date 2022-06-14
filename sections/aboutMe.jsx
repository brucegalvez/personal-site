import styled from "styled-components";

const StyledAboutMe = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.sectionPadding}
  > .container {
    max-width: 72rem;
    width: 100%;
    overflow: hidden;
    padding: 1rem 1.5rem;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-duration: 200ms;
    max-width: 24rem;
    border-radius: 0.25rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    @media (min-width: 640px) {
      padding: 3rem;
      max-width: 56rem;
    }
    :hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    > h2 {
      font-size: 1.25rem;
      line-height: 1.75rem;
      @media (min-width: 768px) {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }
    > .content {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 2rem;
      @media (min-width: 640px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
      }
      > .body {
        margin-bottom: 1rem;
        color: #9ca3af;
        font-size: 1rem;
        line-height: 1.5rem;
        line-height: 1.5rem;
        align-self: center;
        @media (min-width: 640px) {
          grid-column: span 4 / span 4;
        }
      }
      > .imageWrapper {
        background-color: #fbcfe8;
        justify-self: center;
        width: 12rem;
        height: 12rem;
        border-radius: 0.5rem;
        @media (min-width: 640px) {
          justify-self: end;
          grid-column: span 2 / span 2;
        }
        > img {
          object-fit: cover;
          width: 12rem;
          height: 12rem;
          border-radius: 0.5rem;
          filter: grayscale(50%) contrast(1) brightness(80%);
          mix-blend-mode: multiply;
          :hover {
            filter: none;
            mix-blend-mode: normal;
          }
        }
      }
    }
  }
`;

const AboutMe = ({ bio, avatarUrl }) => (
  <StyledAboutMe id="aboutMe">
    <div className="container">
      <h2>About me</h2>
      <div className="content">
        <p className="body">{bio}</p>
        <div className="imageWrapper">
          <img src={avatarUrl} alt="profile_picture" />
        </div>
      </div>
    </div>
  </StyledAboutMe>
);

export default AboutMe;
