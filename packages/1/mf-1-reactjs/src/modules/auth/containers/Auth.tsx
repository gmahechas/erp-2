import { FC, useEffect } from 'react';
import { ISigninAuth } from '@gmahechas/erp-common';
import Login from '../components/Login';
import { env } from '../../../environments';

interface IProps {
    onAuthChange: () => void;
}
const Auth: FC<IProps> = ({ onAuthChange }) => {
    useEffect(() => {
        console.log('new 1:::', env);
    }, []);
    const onLogin = (data: ISigninAuth) => {
        console.log(data);
    };
    return <Login onLogin={onLogin} />;
};

export default Auth;
