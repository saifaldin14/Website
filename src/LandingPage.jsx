import React from 'react';
import Styled from 'styled-components';
import Header from './components/Header';
import { StylesProvider } from "@material-ui/core/styles";
import MainSection from './components/MainSection';

const LandingPage = () => {
    const StyledPage = Styled.div`
        background-color: #000000;
    `;
    return (
        <StylesProvider injectFirst>
            <StyledPage>
                <Header />
                <MainSection />
            </StyledPage>
        </StylesProvider>
    );
}

export default LandingPage;