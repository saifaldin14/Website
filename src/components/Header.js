import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Header = () => {
  const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const StyledTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 2rem;
    padding: 0.5rem;
  `;

  const StyledLogo = styled.img`
    width: 3rem;
    height: 3rem;
    padding-right: 0.5rem;
  `;

  const StyledText = styled.h2`
    color: #ffffff;
    font-size: 18px;
    font-family: "Comfortaa";
  `;

  const StyledButton = styled(Button)`
    background-color: #18a0fb;
    color: #fff;
    margin-right: 2rem;
    &:hover {
      background-color: #0389e2;
    }
  `;

  return (
    <StyledHeader>
      <StyledTitle>
        <StyledLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Blue_Square.svg/781px-Blue_Square.svg.png" />
        <StyledText>Laurier Computing Society</StyledText>
      </StyledTitle>
      <StyledButton>Join our Discord</StyledButton>
    </StyledHeader>
  );
};

export default Header;
