import React from 'react';
import styled from 'styled-components';
import ImgButton from './ImgButton';
import UserActive from '../../images/sidebar_user_active.svg';
import Chat from '../../images/sidebar_chat.svg';
import More from '../../images/sidebar_more.svg';
import Alarm from '../../images/sidebar_alarm.svg';
import Menu from '../../images/sidebar_menu.svg';

const Container = styled.div`
    height: 100%;
    padding: 50px 25px 60px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const MainMenu = styled.div``;

const SubMenu = styled.div``;

const SideBar = () => (
    <Container>
        <MainMenu>
            <ImgButton content={ UserActive } />
            <ImgButton content={ Chat } />
            <ImgButton content={ More } />
        </MainMenu>
        <SubMenu>
            <ImgButton content={ Alarm } />
            <ImgButton content={ Menu } />
        </SubMenu>
    </Container>
);

export default SideBar;