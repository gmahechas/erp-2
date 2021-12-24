import { FC } from 'react';
import HeaderCore from './HeaderCore';

const Layout: FC = ({ children }) => {
    return (
        <>
            <header>
                <HeaderCore />
            </header>
            <main>{children}</main>
        </>
    );
};

export default Layout;
