import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { LocalStorage } from '@gmahechas/erp-common-mf-utils-js';
import { PropsFromRedux, connector } from '@mf-0/auth/store/reducers';

interface IProps extends PropsFromRedux {}
const NoAuthRoute: FC<IProps> = ({ children, auth }) => {
    return auth.auth.isLogged ? <Redirect push to={LocalStorage.get('lastPath')} /> : <>{children}</>;
};

export default connector(NoAuthRoute);
