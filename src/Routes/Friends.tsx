import React from 'react';
import useInput from '../Hooks/useInput';
import Header from '../Components/Header';
import ImgButton from '../Components/ImgButton';
import AddUser from '../../images/add_user.svg';
import SearchBar from '../Components/SearchBar';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    padding: 50px 25px;
`;

const BtnWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const SearchBarWrapper = styled.div`
    width: 100%;
    margin-top: 33px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    background-color: #34353A;
    border-radius: 20px;
`;

const Friends = () => {
    const { value, onChange } = useInput('');

    return (
        <Container>
            <Header title={ '친구' }>
                <BtnWrapper>
                    <ImgButton content={ AddUser } />
                </BtnWrapper>
            </Header>
            <SearchBarWrapper>
                <SearchBar placeholder={ '이름 검색' } name={ 'name' } value={ value } setValue={ onChange } />
            </SearchBarWrapper>
        </Container>
    );
};

export default Friends;