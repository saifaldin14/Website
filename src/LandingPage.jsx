import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import FaqSection from "./components/FAQ";

const LandingPage = () => {
  const StyledPage = styled.div`
    background-color: #000000;
    display: flex;
    flex-direction: column;
    overflow: auto;
  `;
  return (
    <StyledPage>
      <Header />
      <MainSection />
      <FaqSection />
    </StyledPage>
  );
};

export default LandingPage;
