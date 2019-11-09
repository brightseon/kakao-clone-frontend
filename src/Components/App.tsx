import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const App = () => {
    const [isLoggedIn, toggleLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Router isLoggedIn={ isLoggedIn } />
        </BrowserRouter>
    );
};

export default App;