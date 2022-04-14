import { FC } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { LocalStorage } from '@gmahechas/erp-common-mf-utils-js';
import { PropsFromRedux, connector } from '@mf-0/auth/store/reducers';

interface IProps extends PropsFromRedux {}
const AuthRoute: FC<IProps> = ({ children, auth }) => {
    const { pathname, search } = useLocation();
    if (pathname === '/') {
        if (LocalStorage.get('lastPath') != '/2/dashboard') {
          LocalStorage.set('lastPath', `/2/dashboard`);
        }
    } else {
        LocalStorage.set('lastPath', `${pathname}${search}`);
    }
    return auth.auth.isLogged ? <>{children}</> : <Redirect push to='/1/auth' />;
};

export default connector(AuthRoute);
