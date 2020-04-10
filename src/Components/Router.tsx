import React, { SFC, SetStateAction, Dispatch } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LOGGED_OUT_ROUTER, LOGGED_IN_ROUTER } from '../routes';
import Home from '../Routes/Home';
import Auth from '../Routes/Auth';
import Join from '../Routes/Join';
import Chats from '../Routes/Chats';

interface IPropsLoggedInRouter {
    toggleLoggedIn : Dispatch<SetStateAction<boolean>>;
};

interface IPropsLoggedOutRouter {
    toggleLoggedIn : Dispatch<SetStateAction<boolean>>;
};

interface IProps {
    isLoggedIn : boolean;
    toggleLoggedIn : Dispatch<SetStateAction<boolean>>;
};

const LoggedInRouter : SFC<IPropsLoggedInRouter> = ({ toggleLoggedIn }) => (
    <Switch>
        <Route path={ LOGGED_IN_ROUTER.home } component={ Home } />
    </Switch>
);

const LoggedOutRouter : SFC<IPropsLoggedOutRouter> = ({ toggleLoggedIn }) => (
    <Switch>
        <Route path={ LOGGED_OUT_ROUTER.home } exact component={ () => <Auth toggleLoggedIn={ toggleLoggedIn } /> } />
        <Route path={ LOGGED_OUT_ROUTER.join } component={ Join } />
        <Redirect to={ '/' } />
    </Switch>
);

const Router : SFC<IProps> = ({ isLoggedIn, toggleLoggedIn }) => (
    isLoggedIn ? (
        <LoggedInRouter toggleLoggedIn={ toggleLoggedIn } />
    ) : (
        <LoggedOutRouter toggleLoggedIn={ toggleLoggedIn } />
    )
);

export default Router;