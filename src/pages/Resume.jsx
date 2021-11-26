import styled from "styled-components";
import SwitchPage from "./SwitchPages";

const Resume = () => {
  return (
    <ResumeContainer className="resume">
      <SwitchPage />
    </ResumeContainer>
  );
};

const ResumeContainer = styled.div`
  display: flex;
  background-color: plum;
  height: 100vh;
`;

export default Resume;
