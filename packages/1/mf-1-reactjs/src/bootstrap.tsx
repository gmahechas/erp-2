import React from 'react';
import ReactDOM from 'react-dom';
import {
    createBrowserHistory,
    History,
    createMemoryHistory,
    MemoryHistory,
    Location,
} from 'history';
import { ISigninAuth } from '@gmahechas/erp-common';

import '@mf-1/index.css';
import Core from '@mf-1/core/containers/Core';
import { env, initEnv } from '@mf-1/environments';
import { initHelpers } from '@mf-1/helpers';

const mount = async (
    element: HTMLElement,
    {
        onNavigate,
        defaultHistory,
        initialPath,
        signin,
    }: {
        onNavigate?: () => void;
        defaultHistory: History | MemoryHistory;
        initialPath: string;
        signin: (data: ISigninAuth) => void;
    }
) => {
    await initEnv();
    await initHelpers();
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        });
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <React.StrictMode>
            <Core history={history} signin={signin} />
        </React.StrictMode>,
        element
    );

    return {
        onParentNavigate({ pathname: nextPathname }: Location) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        },
    };
};

if (process.env.NODE_ENV === 'development') {
    const element = document.getElementById('_mf-1-root');
    if (element) {
        require('@gmahechas/common-webcomponents/dist/common-webcomponents/common-webcomponents.css');
        const loader = require('@gmahechas/common-webcomponents/loader');
        mount(element, {
            defaultHistory: createBrowserHistory(),
            initialPath: '',
            signin: (data: ISigninAuth) =>
            console.log('isAuthenticated local', data),
        });
        loader.applyPolyfills().then(() => loader.defineCustomElements());
    }
}

export { mount };
