import { FC } from 'react';
import { ISigninAuth } from '@gmahechas/erp-common';
import Login from '../components/Login';

interface IProps {
    onAuthChange: () => void;
}

const Auth: FC<IProps> = ({ onAuthChange }) => {
    const onLogin = (data: ISigninAuth) => {
        console.log(data);
        onAuthChange && onAuthChange();
    };
    return <Login onLogin={onLogin} />;
};

export default Auth;
