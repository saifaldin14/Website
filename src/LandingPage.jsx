import React from 'react';
import Styled from 'styled-components';
import Header from './components/Header';
import { StylesProvider } from "@material-ui/core/styles";


const LandingPage = () => {
    return (
        <StylesProvider injectFirst>
            <div>
                <Header />
            </div>
        </StylesProvider>
    );
}

export default LandingPage;