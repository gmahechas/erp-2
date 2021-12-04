import { FC } from 'react';
import HeaderCore from './HeaderCore';

const Layout: FC = ({ children }) => {
    return (
        <>
            <HeaderCore />
            <main>{children}</main>
        </>
    );
};

export default Layout;
