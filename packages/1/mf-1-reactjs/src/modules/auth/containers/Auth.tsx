import { FC } from 'react';
import { ISigninAuth } from '@gmahechas/erp-common-js';
import Login from '../components/Login';

interface IProps {
    signin: (data: ISigninAuth) => void;
}
const Auth: FC<IProps> = ({ signin }) => {
    const onSignin = (data: ISigninAuth) => signin(data);
    return <Login signin={onSignin} />;
};

export default Auth;
