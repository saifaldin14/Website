import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import join from "../assets/join.png";

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
    width: 50%;
    height: 50%;
    position: absolute;
    top: 25%;
    left: 10%;
    border-radius: 3%;
    border: 0.5px solid #ffffff;
    z-index: 2;
  `;
  const ContainerHeader = styled.div`
    height: 8%;
    display: flex;
    align-items: center;
  `;
  const ContainerHeaderButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 10%;
    margin: 1%;
  `;
  const RedButton = styled.div`
    background-color: red;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
  `;
  const YellowButton = styled.div`
    background-color: yellow;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
  `;
  const GreenButton = styled.div`
    background-color: green;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
  `;
  const ContentContainer = styled.div`
    height: 92%;
    background-color: #2c3844;
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
        <ContainerHeader>
          <ContainerHeaderButtonDiv>
            <RedButton />
            <YellowButton />
            <GreenButton />
          </ContainerHeaderButtonDiv>
        </ContainerHeader>
        <ContentContainer>
          <StyledH1>Interested in joining the Club?</StyledH1>
          <StyledP>
            Join our Discord for our official announcements about the school
            year, as well as stay up-to-date on all things LCS
          </StyledP>
          <StyledButton>Discord</StyledButton>
        </ContentContainer>
      </StyleContainer>
    </div>
  );
};

export default MainSection;
