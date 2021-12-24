import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '@mf-0/core/components/Layout';
const Mf1 = lazy(() => import('@mf-0/microfrontends/Mf1'));
const Mf2 = lazy(() => import('@mf-0/microfrontends/Mf2'));
const Mf3 = lazy(() => import('@mf-0/microfrontends/Mf3'));
import NotFoundCore from '@mf-0/core/components/NotFoundCore';

const RouterAuth = () => {
    return (
        <Layout>
            <Suspense fallback={<div>Loading ...</div>}>
                <Switch>
                    <Route path='/1/user' component={Mf1} />
                    <Route path='/3' component={Mf3} />
                    <Route exact path='/' component={Mf2} />
                    <Route path='*' component={NotFoundCore} />
                </Switch>
            </Suspense>
        </Layout>
    );
};

export default RouterAuth;
