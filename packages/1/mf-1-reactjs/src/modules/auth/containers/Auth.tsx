import { FC } from 'react';
import { ISigninAuth } from '@gmahechas/erp-common';
import Login from '../components/Login';

interface IProps {
    signin: (data: ISigninAuth) => void;
}
const Auth: FC<IProps> = ({ signin }) => {
    const onLogin = (data: ISigninAuth) => signin(data);
    return <Login onLogin={onLogin} />;
};

export default Auth;
