import React from 'react';
import ReactDOM from 'react-dom';
import {
    createBrowserHistory,
    History,
    createMemoryHistory,
    MemoryHistory,
    Location,
} from 'history';

import '@mf-2/index.css';
import Core from '@mf-2/core/containers/Core';
import { initEnv } from '@mf-2/environments';
import { initHelpers } from '@mf-2/helpers';

const mount = async (
    element: HTMLElement,
    {
        onNavigate,
        defaultHistory,
        initialPath,
    }: {
        onNavigate?: () => void;
        defaultHistory: History | MemoryHistory;
        initialPath: string;
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
            <Core history={history} />
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
    const element = document.getElementById('_mf-2-root');
    if (element) {
        require('@gmahechas/common-webcomponents/dist/common-webcomponents/common-webcomponents.css');
        const loader = require('@gmahechas/common-webcomponents/loader');
        mount(element, {
            defaultHistory: createBrowserHistory(),
            initialPath: '',
        });
        loader.applyPolyfills().then(() => loader.defineCustomElements());
    }
}

export { mount };
