import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core/styles";
import FaqSection from "./FAQ";
import join from "../assets/join.png";
import window from "../assets/window.svg";

const MainSection = () => {
  const BackGroundDivLeft = styled.div`
    width: 50%;
    position: absolute;
    background-color: #000000;
    left: 0px;
    height: 80%;
  `;
  const BackGroundDivRight = styled.div`
    background: url(${join});
    width: 50%;
    position: absolute;
    right: 0px;
    height: 80%;
  `;
  const StyleContainer = styled.div`
    background-color: black;
    background: url(${window});
    width: 50%;
    height: 50%;
    position: absolute;
    top: 25%;
    left: 10%;
    border-radius: 2%;
    display: flex;
    align-items: center;
    /* border: 0.5px solid #ffffff; */
    z-index: 2;
  `;

  const ContentContainer = styled.div`
    background-color: #282828;
    border-bottom-left-radius: 4%;
    border-bottom-right-radius: 4%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;
  const StyledH1 = styled.h1`
    color: #ffffff;
    font-family: "Comfortaa";
    margin-left: 2rem;
  `;
  const StyledP = styled.p`
    color: #ffffff;
    font-family: "Comfortaa";
    margin-left: 2rem;
    margin-right: 2rem;
  `;
  const StyledButton = styled(Button)`
    background-color: #18a0fb;
    color: #fff;
    width: 30%;
    margin-left: 2rem;
    &:hover {
      background-color: #0389e2;
    }
  `;
  return (
    <div>
      <BackGroundDivLeft />
      <BackGroundDivRight />
      <StyleContainer>
        <ContentContainer>
          <StyledH1>Interested in joining the Club?</StyledH1>
          <StyledP>
            Join our Discord for our official announcements about the school
            year, as well as stay up-to-date on all things LCS
          </StyledP>
          <StylesProvider injectFirst>
            <StyledButton>Discord</StyledButton>
          </StylesProvider>
        </ContentContainer>
      </StyleContainer>
      <FaqSection />
    </div>
  );
};

export default MainSection;
