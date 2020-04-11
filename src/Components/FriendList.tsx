import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin-top: 40px;
    overflow-y: auto;
`;

const FriendList = () => {

    return (
        <Container>
            <Friend friendName={ '나' } me={ true } />
            <Friend friendName={ '너' } />
        </Container>
    );
};

export default FriendList;