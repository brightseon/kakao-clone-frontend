import React from 'react';
import styled from 'styled-components';
import useInput from '../Hooks/useInput';

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

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }
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

const Join = () => {
    const email = useInput('');
    const name = useInput('');
    const password = useInput('');
    const passwordConfirm = useInput('');

    return (
        <Container>
            <JoinForm>
                <InputBox>
                    <Input type="text" placeholder="이메일" value={ email.value } onChange={ email.onChange } />
                    <Error></Error>
                </InputBox>
                <InputBox>
                    <Input type="text" placeholder="이름" value={ name.value } onChange={ name.onChange } />
                    <Error></Error>
                </InputBox>
                <InputBox>
                    <Input type="text" placeholder="비밀번호" value={ password.value } onChange={ password.onChange } />
                    <Error></Error>
                </InputBox>
                <InputBox>
                    <Input type="text" placeholder="비밀번호 확인" value={ passwordConfirm.value } onChange={ passwordConfirm.onChange } />
                    <Error></Error>
                </InputBox>
            </JoinForm>
            <JoinButton type="button" active={ false }>회원가입</JoinButton>
        </Container>
    );
};

export default Join;