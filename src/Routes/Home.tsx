import React from 'react';
import SideBar from '../Components/SideBar';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Home = () => (
    <Container>
        <SideBar />
    </Container>
);

export default Home;