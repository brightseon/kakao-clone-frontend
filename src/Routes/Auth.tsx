import React, { SetStateAction, SFC, Dispatch, KeyboardEvent, KeyboardEventHandler, useState } from 'react';
import styled from 'styled-components';
import useInput from '../Hooks/useInput';
import axios from 'axios';
import { URL } from '../constants';
import MemberService from '../Components/MemberService';

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
    border-bottom: 1px solid ${ props => props.theme.authDarkGrey };
    background-color: transparent;
    color: ${ props => props.theme.whiteText };
    font-size: 12px;
    padding: 8px 10px;
    margin-bottom: 10px;

    &::placeholder {
        color: ${ props => props.theme.darkText };
    }
`;

const Error = styled.span`
    height: 10px;
    font-size: 11px;
    color: ${ props => props.theme.redColor };
`;

const LoginButton = styled.button<{ active : boolean }>`
    background-color: ${ props => props.theme.blackColor };
    padding: 16px 122px;
    font-size: 12px;
    border: none;
    color: ${ props => props.active ? props.theme.whiteText : props.theme.darkText };
    cursor: pointer;
    margin-top: 20px;
    border-radius: 3px;
    user-select: none;
`;

const Auth : SFC<IProps> = ({ toggleLoggedIn }) => {
    const [error, setError] = useState('');
    const email = useInput(''); 
    const password = useInput('');
    
    const isAcitve = () : boolean => {
        let active = false;
        
        if(email.value.length > 0 && password.value.length > 0) active = true;

        return active;
    };

    const resetError = () => {
        if(error) setError('');
    }

    const enterLogin : KeyboardEventHandler = (e : KeyboardEvent) => {
        resetError();

        if(e.keyCode === 13) login();
    };

    const login = async () => {
        try {
            if(!isAcitve()) return;

            const { data : { data }} = await axios.post(`${ URL }/auth/login`, {
                email : email.value,
                password : password.value
            });
            
            console.log('data : ', data);

            toggleLoggedIn(true);
        } catch(err) {
            console.log('login error : ', err);

            setError('아이디와 비밀번호를 다시 확인해 주세요.');
        }
    };

    return (
        <Container>
            <LoginForm>
                <Input type="text" placeholder="이메일" value={ email.value } onChange={ email.onChange }
                    onKeyDown={ resetError } />
                <Input type="password" placeholder="비밀번호" value={ password.value } onChange={ password.onChange }
                    onKeyDown={ enterLogin } />
                <Error>{ error }</Error>
                <LoginButton type="button" active={ isAcitve() } onClick={ login }>로그인</LoginButton>
           </LoginForm>
           <MemberService />
        </Container>
    );
};

export default Auth;