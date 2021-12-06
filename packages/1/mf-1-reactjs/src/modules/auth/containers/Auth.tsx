import { ISigninAuth } from '@gmahechas/erp-common';
import Login from '../components/Login';

const Auth = () => {
    const onLogin = (data: ISigninAuth) => {
        console.log(data);
    };
    return <Login onLogin={onLogin} />;
};

export default Auth;
