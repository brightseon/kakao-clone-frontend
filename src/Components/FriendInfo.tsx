import React from 'react';
import Friend from './Friend';
import Accodian from './Accodian';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin-top: 40px;
    overflow-y: auto;
`;

const FriendInfo = () => {

    return (
        <Container>
            <Friend friendName={ '나' } me={ true } />
            <Accodian name={ '즐겨찾기' } />
            <Accodian name={ '친구' } />
        </Container>
    );
};

export default FriendInfo;