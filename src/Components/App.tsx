import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import styled from 'styled-components';
import { size } from '../styles/size';

const Container = styled.div`
    width: ${ size.maxWidth };
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    const [isLoggedIn, toggleLoggedIn] = useState(false);

    return (
        <Container>
            <ThemeProvider theme={ Theme }>
                <BrowserRouter>
                    <GlobalStyles />
                    <Router isLoggedIn={ isLoggedIn } toggleLoggedIn={ toggleLoggedIn } />
                </BrowserRouter>
            </ThemeProvider>
        </Container>
    );
};

export default App;