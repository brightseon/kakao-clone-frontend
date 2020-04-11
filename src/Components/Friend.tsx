import React, { SFC } from 'react';
import styled from 'styled-components';

interface IProps {
    me? : boolean;
    profileImg? : string;
    friendName : string;
    status? : string;
    music? : string;
};

const Container = styled.div`
    padding: 15px 25px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #222327;
    }
`;

const ProfileImg = styled.img<{ me : boolean }>`
    width: ${ props => props.me ? '63px' : '48px' };
    height: ${ props => props.me ? '61px' : '46px' };
    margin-right: 15px;
    border-radius: 18px;
`;

const FriendInfo = styled.div`
    flex: 1;
`;

const Name = styled.div`
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
`;

const Status = styled.div`
    font-size: 12px;
    color: #8C8F94;
`;

const Friend : SFC<IProps> = ({ me = false, profileImg, friendName, status, music }) => (
    <Container>
        <ProfileImg me={ me } />
        <FriendInfo>
            <Name>{ friendName }</Name>
            <Status>{ status }🐹dddd</Status>
        </FriendInfo>
    </Container>
);

export default Friend;