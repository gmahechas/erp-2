import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '@mf-0/core/components/Layout';
import NotFoundCore from '@mf-0/core/components/NotFoundCore';

const Mf1 = lazy(() => import('@mf-0/microfrontends/Mf1'));
const Mf2 = lazy(() => import('@mf-0/microfrontends/Mf2'));
const Mf3 = lazy(() => import('@mf-0/microfrontends/Mf3'));

const Core = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/auth' component={Mf1} />
                        <Route path='/user' component={Mf1} />
                        <Route path='/country' component={Mf3} />
                        <Route path='/estate' component={Mf3} />
                        <Route path='/city' component={Mf3} />
                        <Route path='/address' component={Mf3} />
                        <Route exact path='/' component={Mf2} />
                        <Route path='*'component={NotFoundCore} />
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    );
};

export default Core;
