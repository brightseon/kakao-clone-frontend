import React, { SFC } from 'react';
import styled from 'styled-components';

interface IProps {
    className? : string;
    content : any;
};

const Container = styled.div`
    cursor: pointer;
`;

const Button = styled.img``;

const ImgButton : SFC<IProps> = ({ className, content }) => (
    <Container>
        <Button src={ content } />
    </Container>
);

export default ImgButton;