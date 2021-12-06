import { ISigninAuth } from '@gmahechas/erp-common';
import Login from '../components/Login';

const Auth = () => {
    const onLogin = (data: ISigninAuth) => {
    };
    return <Login onLogin={onLogin} />;
};

export default Auth;
