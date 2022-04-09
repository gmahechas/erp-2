import { FC } from 'react';
import HeaderCore from './HeaderCore';

import { PropsFromRedux, connector } from '@mf-0/auth/store/reducers';
interface IProps extends PropsFromRedux {}
const Layout: FC<IProps> = ({ children, signout  }) => {
    const onSignout = () => signout();
    return (
        <>
            <header>
                <HeaderCore signout={onSignout} />
            </header>
            <main>{children}</main>
        </>
    );
};

export default connector(Layout);
