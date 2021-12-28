import { FC, lazy, Suspense, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { PropsFromRedux, connector } from '@mf-0/auth/store/reducers';

import WithRouterAuth from '../router/WithRouterAuth';
import { Mf1 } from '@mf-0/microfrontends';

const history = createBrowserHistory();

interface IProps extends PropsFromRedux {}
const WithRouter: FC<IProps> = ({ me }) => {
    useEffect(() => {
        me();
    }, []);
    return (
        <Router history={history}>
            <Suspense fallback={<div>Loading ...</div>}>
                <Switch>
                    <Route path='/1/auth' component={Mf1} />
                    <Route path='*' component={WithRouterAuth} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default connector(WithRouter);
