import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '@mf-0/core/components/Layout';
import { Mf1, Mf2, Mf3 } from '@mf-0/microfrontends';
import NotFoundCore from '@mf-0/core/components/NotFoundCore';

const WithRouterAuth = () => {
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

export default WithRouterAuth;
