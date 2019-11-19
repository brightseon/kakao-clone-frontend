import React, { useState, KeyboardEventHandler, KeyboardEvent, SFC } from 'react';
import styled from 'styled-components';
import useInput from '../Hooks/useInput';
import axios from 'axios';
import { URL } from '../constants';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps {};

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const JoinForm = styled.div`
    width: 286px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${ props => props.theme.authDarkGrey };
    background-color: transparent;
    color : ${ props => props.theme.whiteText };
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

const JoinButton = styled.button<{ active : boolean }>`
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

const Join : SFC<IProps> = ({ history }) => {
    const email = useInput('');
    const name = useInput('');
    const password = useInput('');
    const passwordConfirm = useInput('');
    const [error, setError] = useState('');

    const isActive = () => {
        return (
            email.value.length > 0 &&
            name.value.length > 0 &&
            password.value.length > 0 &&
            passwordConfirm.value.length > 0
        );
    };

    const resetError : KeyboardEventHandler = (e : KeyboardEvent<HTMLInputElement>) => {
        if(error.length > 0) {
            setError('');
        }

        if(e.keyCode === 13) {
            join();
        }
    };

    const validateCheck = () : boolean => {
        let success = true;

        if(password.value !== passwordConfirm.value) {
            success = false;
        }

        return success;
    };

    const join = async () => {
        if(!isActive()) return;
        if(!validateCheck()) {
            setError('비밀번호와 비밀번호 확인이 맞지 않습니다.');

            return;
        }

        try {
            const checkResult = await axios.post(`${ URL }/auth/duplicateCheck`, {
                email : email.value
            });

            console.log('checkResult : ', checkResult);

            if(checkResult) {

            }

            const result = await axios.post(`${ URL }/auth/join`, {
                email : email.value,
                name : name.value,
                password : password.value,
                password_confirm : passwordConfirm.value
            });
    
            console.log('result : ', result);

            history.push('/');
        } catch(err) {
            console.log('join error : ', err);
        }
    };

    return (
        <Container>
            <JoinForm>
                <Input type="text" placeholder="이메일" value={ email.value } onChange={ email.onChange }
                    onKeyDown={ resetError } />
                <Input type="text" placeholder="이름" value={ name.value } onChange={ name.onChange }
                    onKeyDown={ resetError } />
                <Input type="password" placeholder="비밀번호" value={ password.value } 
                    onChange={ password.onChange } onKeyDown={ resetError } />
                <Input type="password" placeholder="비밀번호 확인" value={ passwordConfirm.value } 
                    onChange={ passwordConfirm.onChange } onKeyDown={ resetError } />
                <Error>{ error }</Error>
            </JoinForm>
            <JoinButton type="button" active={ isActive() } onClick={ join }>회원가입</JoinButton>
        </Container>
    );
};

export default Join;