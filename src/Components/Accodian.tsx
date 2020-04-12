import React, { SFC } from 'react';
import ImgButton from './ImgButton';
import AccodianArrow from '../../images/accodian_arrow.svg';
import FriendItems from './FriendItems';
import styled from 'styled-components';

interface IProps {
    name : string;
};

const Container = styled.div``;

const Line = styled.div`
    height: 1px;
    margin: 23px 25px;
    background-color: #32353A;
`;

const Title = styled.div`
    margin-bottom: 13px;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Name = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #8C8F94;
`;

const Accodian : SFC<IProps> = ({ name }) => (
    <Container>
        <Line />
        <Title>
            <Name>{ name }</Name>
            <ImgButton content={ AccodianArrow } />
        </Title>
        <FriendItems />
    </Container>
);

export default Accodian;