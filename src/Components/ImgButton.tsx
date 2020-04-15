import React, { SFC } from 'react';
import styled from 'styled-components';

interface IProps {
    className? : string;
    content : any;
    btnClick? : () => void;
};

const Container = styled.div`
    cursor: pointer;
`;

const Button = styled.img``;

const ImgButton : SFC<IProps> = ({ className, content, btnClick }) => (
    <Container className={ className } onClick={ btnClick }>
        <Button src={ content } />
    </Container>
);

export default ImgButton;