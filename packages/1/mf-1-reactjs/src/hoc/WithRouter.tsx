import { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

import Layout from '@mf-1/core/components/Layout';
const Auth = lazy(() => import('@mf-1/modules/auth/containers/Auth'));
const User = lazy(() => import('@mf-1/modules/user/containers/User'));

interface IProps {
    history: History | MemoryHistory;
    onAuthChange: () => void;
}

const WithRouter: FC<IProps> = ({ history, onAuthChange }) => {
    return (
        <Router history={history}>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/user' component={User} />
                        <Route path='/auth'>
                            <Auth onAuthChange={onAuthChange} />
                        </Route>
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
};

export default WithRouter;
