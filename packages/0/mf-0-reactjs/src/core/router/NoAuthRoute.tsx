import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { PropsFromRedux, connector } from '@mf-0/auth/store/reducers';

interface IProps extends PropsFromRedux {}
const NoAuthRoute: FC<IProps> = ({ children, auth }) => {
    return auth.auth.isLogged ? <Redirect to='/2/dashboard' /> : <>{children}</>;
};

export default connector(NoAuthRoute);
