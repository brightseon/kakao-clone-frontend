import React, { SFC, ChangeEvent } from 'react';
import SearchIcon from '../../images/search_bar.svg';
import styled from 'styled-components';

interface IProps {
    name : string;
    value : any;
    placeholder? : string;
    setValue : (e : ChangeEvent) => void;
};

const Container = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    margin-right: 10px;
`;

const Search = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
    color: #FFFFFF;

    &::placeholder {
        color: #FFFFFF;
        opacity: 30%;
    }
`;

const SearchBar : SFC<IProps> = ({ placeholder, name, value, setValue }) => (
    <Container>
        <Icon src={ SearchIcon } />
        <Search name={ name } value={ value } onChange={ setValue } placeholder={ placeholder } />
    </Container>
);

export default SearchBar;