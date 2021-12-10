import { useEffect } from 'react';
import { env } from '../../environments';

const Dashboard = () => {
    useEffect(() => {
        console.log('2:::', env);
    }, []);
    return <div>Dashboard</div>;
};

export default Dashboard;
