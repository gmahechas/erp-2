import { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

import Layout from '../components/Layout';
const Dashboard = lazy(() => import('@mf-2/modules/dashboard/Dashboard'));

interface IProps {
    history: History | MemoryHistory;
}

const Core: FC<IProps> = ({ history }) => {
    return (
        <Layout>
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/' component={Dashboard} />
                    </Switch>
                </Suspense>
            </Router>
        </Layout>
    );
};

export default Core;
