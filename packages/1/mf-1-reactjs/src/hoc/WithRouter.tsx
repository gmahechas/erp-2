import { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

import Layout from '@mf-1/core/components/Layout';
const Auth = lazy(() => import('@mf-1/modules/auth/containers/Auth'));
const User = lazy(() => import('@mf-1/modules/user/containers/User'));

interface IProps {
    history: History | MemoryHistory;
}

const WithRouter: FC<IProps> = ({ history }) => {
    return (
        <Router history={history}>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/user' component={User} />
                        <Route path='/auth' component={Auth} />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
};

export default WithRouter;
