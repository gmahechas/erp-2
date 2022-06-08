import { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';
import { ISigninAuth } from '@gmahechas/erp-common-js';

import Layout from '@mf-1/core/components/Layout';
const Auth = lazy(() => import('@mf-1/modules/auth/containers/Auth'));
const User = lazy(() => import('@mf-1/modules/user/containers/User'));

interface IProps {
    history: History | MemoryHistory;
    signin: (data: ISigninAuth) => void;
}
const WithRouter: FC<IProps> = ({ history, signin }) => {
    return (
        <Router history={history}>
            <Layout>
                <Suspense fallback={<div>Loading 1 ...</div>}>
                    <Switch>
                        <Route path='/1/user' component={User} />
                        <Route path='/1/auth'>
                            <Auth signin={signin} />
                        </Route>
                        <Route path='*' render={() => <span>Not found 1</span>} />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
};

export default WithRouter;
