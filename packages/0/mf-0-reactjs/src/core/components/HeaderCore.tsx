import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    signout: () => void;
}
const HeaderCore: FC<IProps> = ({ signout }) => {
    return (
        <nav>
            <Link to='/'>Dashboard | </Link>
            <Link to='/auth'>Auth | </Link>
            <Link to='/user'>User | </Link>
            <Link to='/country'>Country | </Link>
            <Link to='/estate'>Estate | </Link>
            <Link to='/city'>City | </Link>
            <Link to='/address'>Address</Link>
            <button onClick={signout}>Signout</button>
        </nav>
    );
};

export default HeaderCore;
