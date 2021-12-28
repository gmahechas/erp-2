import { FC, Suspense, useLayoutEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { PropsFromRedux, connector } from '@mf-0/auth/store/reducers';

import WithRouterAuth from '../router/WithRouterAuth';
import { Mf1 } from '@mf-0/microfrontends';

const history = createBrowserHistory();

interface IProps extends PropsFromRedux {}
const WithRouter: FC<IProps> = ({ me, auth }) => {
    useLayoutEffect(() => {
        me();
    }, []);
    useLayoutEffect(() => {
        if (auth.auth.isLogged) {
            history.push('/2/dashboard');
        } else {
            history.push('/1/auth');
        }
    }, [auth.auth.isLogged]);
    return (
        <Router history={history}>
            <Suspense fallback={<div>Loading 0 ...</div>}>
                <Switch>
                    <Route path='/1/auth' component={Mf1} />
                    <Route path='*' component={WithRouterAuth} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default connector(WithRouter);
