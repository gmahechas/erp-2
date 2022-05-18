import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    signout: () => void;
}
const HeaderCore: FC<IProps> = ({ signout }) => {
    return (
        <nav>
            <Link to='/2/dashboard'>Dashboard | </Link>
            <Link to='/1/auth'>Auth | </Link>
            <Link to='/1/user'>User | </Link>
            <Link to='/3/country'>Country | </Link>
            <Link to='/3/estate'>Estate | </Link>
            <Link to='/3/city'>City | </Link>
            <Link to='/3/address'>Address</Link>
            <button onClick={() => signout()}>Signout</button>
        </nav>
    );
};

export default HeaderCore;
