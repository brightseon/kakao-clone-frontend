import React, { SFC } from 'react';
import styled from 'styled-components';

interface IProps {
    title : string;
};

const Container = styled.div`
    padding: 0 25px;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
`;

const Header : SFC<IProps> = ({ title, children }) => (
    <Container>
        <Title>{ title }</Title>
        { children }
    </Container>
);

export default Header;