import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImgButton from './ImgButton';
import UserActive from '../../images/sidebar_user_active.svg';
import Chat from '../../images/sidebar_chat.svg';
import More from '../../images/sidebar_more.svg';
import Alarm from '../../images/sidebar_alarm.svg';
import Menu from '../../images/sidebar_menu.svg';
import { LOGGED_IN_ROUTER } from '../routes';

const Container = styled.div`
    height: 100%;
    padding: 50px 25px 60px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #32353A;
`;

const MainMenu = styled.div``;

const SubMenu = styled.div``;

const SideBar = () => (
    <Container>
        <MainMenu>
            <Link to={ LOGGED_IN_ROUTER.home }>
                <ImgButton content={ UserActive } />
            </Link>
            <Link to={ LOGGED_IN_ROUTER.chats }>
                <ImgButton content={ Chat } />
            </Link>
            <Link to={ LOGGED_IN_ROUTER.more }>
                <ImgButton content={ More } />
            </Link>
        </MainMenu>
        <SubMenu>
            <ImgButton content={ Alarm } />
            <ImgButton content={ Menu } />
        </SubMenu>
    </Container>
);

export default SideBar;