import { FC } from 'react';
import { ISigninAuth } from '@gmahechas/erp-common';
import Login from '../components/Login';
import { connector, PropsFromRedux } from '../store/reducers';

interface IProps extends PropsFromRedux {
    onAuthChange: () => void;
}
const Auth: FC<IProps> = ({ onAuthChange, auth, signin }) => {
    const onLogin = (data: ISigninAuth) => {
        signin(data);
    };
    return (
        <>
            <Login onLogin={onLogin} />
        </>
    );
};

export default connector(Auth);
