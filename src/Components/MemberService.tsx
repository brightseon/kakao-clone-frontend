import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LOGGED_OUT_ROUTER } from '../routes';

const Container = styled.div``;

const Item = styled(Link)`
    color: ${ props => props.theme.whiteText };
    font-size: 12px;
    user-select: none;
    cursor: pointer;
`;

const Separator = styled.span`
    color: ${ props => props.theme.whiteText };
    font-size: 12px;
    margin: 0 10px;
    user-select: none;
`;

const MemberService = () => (
    <Container>
        <Item to={ LOGGED_OUT_ROUTER.join }>회원가입</Item>
        <Separator>|</Separator>
        <Item to="">계정 찾기</Item>
        <Separator>|</Separator>
        <Item to="">비밀번호 찾기</Item>
    </Container>
);

export default MemberService;