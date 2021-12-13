import { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

import Layout from '@mf-2/core/components/Layout';
const Dashboard = lazy(() => import('@mf-2/modules/dashboard/Dashboard'));

interface IProps {
    history: History | MemoryHistory;
}
const WithRouter: FC<IProps> = ({ history }) => {
    return (
        <Router history={history}>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/' component={Dashboard} />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
};

export default WithRouter;
