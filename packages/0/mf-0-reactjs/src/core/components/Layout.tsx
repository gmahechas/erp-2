import { FC, useEffect } from 'react';
import HeaderCore from './HeaderCore';
import { PropsFromRedux, connector } from '@mf-0/auth/store/reducers';

interface IProps extends PropsFromRedux {}
const Layout: FC<IProps> = ({ children, me, signout }) => {
    useEffect(() => {
        me();
    }, []);
    return (
        <>
            <header>
                <HeaderCore signout={signout} />
            </header>
            <main>{children}</main>
        </>
    );
};

export default connector(Layout);
