import { FC, Suspense, useLayoutEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LocalStorage } from '@gmahechas/erp-common-mf-utils-js';

import { PropsFromRedux, connector } from '@mf-0/auth/store/reducers';

import WithRouterAuth from '../router/WithRouterAuth';
import { Mf1 } from '@mf-0/microfrontends';
import NoAuthRoute from './NoAuthRoute';
import AuthRoute from './AuthRoute';

const history = createBrowserHistory();

interface IProps extends PropsFromRedux {}
const WithRouter: FC<IProps> = ({ me }) => {
    useLayoutEffect(() => {
        me();
    }, []);
    return (
        <Router history={history}>
            <Suspense fallback={<div>Loading 0 ...</div>}>
                <Switch>
                    <Route path='/1/auth'>
                        <NoAuthRoute>
                            <Mf1 />
                        </NoAuthRoute>
                    </Route>
                    <Route path='*'>
                        <AuthRoute>
                            <WithRouterAuth />
                        </AuthRoute>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default connector(WithRouter);
