import { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

import { store } from '@mf-3/core/store';
import { reducers as countryReducers } from '@mf-3/modules/country/store/reducers';

import Layout from '@mf-3/core/components/Layout';
const Country = lazy(() =>
    import('@mf-3/modules/country/containers/Country').then((module) => {
        store.injectReducer('country', countryReducers);
        return { default: module.default };
    })
);
const Estate = lazy(() =>
    import('@mf-3/modules/estate/containers/Estate').then((module) => {
        return { default: module.default };
    })
);
const City = lazy(() =>
    import('@mf-3/modules/city/containers/City').then((module) => {
        return { default: module.default };
    })
);
const Address = lazy(() =>
    import('@mf-3/modules/address/containers/Address').then((module) => {
        return { default: module.default };
    })
);

interface IProps {
    history: History | MemoryHistory;
}

const WithRouter: FC<IProps> = ({ history }) => {
    return (
        <Router history={history}>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/address' component={Address} />
                        <Route path='/city' component={City} />
                        <Route path='/estate' component={Estate} />
                        <Route path='/country' component={Country} />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
};

export default WithRouter;
