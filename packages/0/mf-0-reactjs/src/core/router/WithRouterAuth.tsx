import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '@mf-0/core/components/Layout';
import { Mf1, Mf2, Mf3 } from '@mf-0/microfrontends';

const WithRouterAuth = () => {
    return (
        <Layout>
            <Suspense fallback={<div>Loading 0 ...</div>}>
                <Switch>
                    <Route path='/1/user' component={Mf1} />
                    <Route path='/2' component={Mf2} />
                    <Route path='/3' component={Mf3} />
                    <Route path='*' render={() => <span>Not found 0</span>} />
                </Switch>
            </Suspense>
        </Layout>
    );
};

export default WithRouterAuth;
