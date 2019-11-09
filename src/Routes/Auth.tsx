import React, { SetStateAction, SFC, Dispatch } from 'react';

interface IProps {
    toggleLoggedIn : Dispatch<SetStateAction<boolean>>;
};

const Auth : SFC<IProps> = ({ toggleLoggedIn }) => (
    <div>Auth</div>
);

export default Auth;