import React from "react";
import styled from "styled-components";
import bg from "../assets/faq.svg";

const FaqSection = () => {
  const BackGroundDiv = styled.div`
    background: url(${bg});
    height: 80vh;
    width: 100vw;
  `;
  return <BackGroundDiv></BackGroundDiv>;
};

export default FaqSection;
