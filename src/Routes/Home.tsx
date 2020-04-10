import React from 'react';
import { Route } from 'react-router-dom';
import Friends from './Friends';
import Chats from './Chats';
import SideBar from '../Components/SideBar';
import styled from 'styled-components';
import { LOGGED_IN_ROUTER } from '../routes';

const { home, chats } = LOGGED_IN_ROUTER;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const Home = () => (
    <Container>
        <SideBar />
        <Route path={ home } exact component={ Friends } />
        <Route path={ chats } exact component={ Chats } />
    </Container>
);

export default Home;