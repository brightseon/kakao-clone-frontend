import React, { SetStateAction, SFC, Dispatch } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../Hooks/useInput';
import { LOGGED_OUT_ROUTER } from '../routes';

interface IProps {
    toggleLoggedIn : Dispatch<SetStateAction<boolean>>;
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid #3F4045;
    background-color: transparent;
    color: ${ props => props.theme.whiteText };
    font-size: 12px;
    padding: 8px 10px;
    margin-bottom: 10px;

    &::placeholder {
        color: ${ props => props.theme.darkText };
    }
`;

const LoginButton = styled.button<{ active : boolean }>`
    background-color: ${ props => props.theme.black };
    padding: 16px 122px;
    font-size: 12px;
    border: none;
    color: ${ props => props.active ? props.theme.whiteText : props.theme.darkText };
    cursor: pointer;
    margin-top: 20px;
    border-radius: 3px;
    user-select: none;
`;

const MemberService = styled.div``;

const Item = styled.span`
    color: ${ props => props.theme.whiteText };
    font-size: 12px;
    user-select: none;
    cursor: pointer;
`;

const LinkItme = styled(Link)`
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

const Auth : SFC<IProps> = ({ toggleLoggedIn }) => {
    let active = false;
    const email = useInput('');
    const password = useInput('');

    if(email.value.length > 0 && password.value.length > 0) active = true;

    return (
        <Container>
            <LoginForm>
                <Input type="text" placeholder="이메일" value={ email.value } onChange={ email.onChange } />
                <Input type="password" placeholder="비밀번호" value={ password.value } onChange={ password.onChange } />
                <LoginButton type="button" active={ active }>로그인</LoginButton>
           </LoginForm>
           <MemberService>
                <LinkItme to={ LOGGED_OUT_ROUTER.join }>회원가입</LinkItme>
                <Separator>|</Separator>
                <Item>계정 찾기</Item>
                <Separator>|</Separator>
                <Item>비밀번호 찾기</Item>
           </MemberService>
        </Container>
    );
};

export default Auth;