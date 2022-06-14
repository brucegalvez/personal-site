import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  padding-bottom: 1rem;
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.25rem;
  justify-content: center;
`;

const Footer = () => (
  <StyledFooter>
    <span>Designed and Built by Rodrigo Bruce Galvez.</span>
  </StyledFooter>
);

export default Footer;
