import React, { SFC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Auth from '../Routes/Auth';

interface IProps {
    isLoggedIn : boolean;
};

const LoggedInRouter = () => (
    <Switch>
        <Route path={ '/' } exact component={ Home } />
    </Switch>
);

const LoggedOutRouter = () => (
    <Switch>
        <Route path={ '/' } exact component={ Auth } />
    </Switch>
);

const Router : SFC<IProps> = ({ isLoggedIn }) => isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;

export default Router;