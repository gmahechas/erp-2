import { Link } from 'react-router-dom';

const HeaderCore = () => {
    return (
        <>
            <Link to='/'>Dashboard | </Link>
            <Link to='/auth'>Auth | </Link>
            <Link to='/user'>User | </Link>
            <Link to='/country'>Country | </Link>
            <Link to='/estate'>Estate | </Link>
            <Link to='/city'>City | </Link>
            <Link to='/address'>Address</Link>
        </>
    );
};

export default HeaderCore;
