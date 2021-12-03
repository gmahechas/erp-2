import { FC } from 'react';
import HeaderCore from './HeaderCore';

const Layout: FC = ({ children }) => {
    return (
        <div>
            <HeaderCore />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
