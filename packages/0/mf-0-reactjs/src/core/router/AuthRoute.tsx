import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { PropsFromRedux, connector } from '@mf-0/auth/store/reducers';

interface IProps extends PropsFromRedux {}
const AuthRoute: FC<IProps> = ({ children, auth }) => {
    return auth.auth.isLogged ? <>{children}</> : <Redirect to='/1/auth' />;
};

export default connector(AuthRoute);
