import React from 'react';
import Box from '../Components/Container';
import SideBar from '../Components/SideBar';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const Home = () => (
    <Container>
        <SideBar />
        <Box />
    </Container>
);

export default Home;