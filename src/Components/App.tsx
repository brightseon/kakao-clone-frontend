import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';

const App = () => {
    const [isLoggedIn, toggleLoggedIn] = useState(false);

    return (
        <ThemeProvider theme={ Theme }>
            <BrowserRouter>
                <GlobalStyles />
                <Router isLoggedIn={ isLoggedIn } toggleLoggedIn={ toggleLoggedIn } />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;