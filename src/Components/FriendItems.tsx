import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const Container = styled.div``;

const FriendItems = () => (
    <Container>
        <Friend friendName={ '너' } />
    </Container>
);

export default FriendItems;