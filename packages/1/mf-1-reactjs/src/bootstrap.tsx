import React from 'react';
import ReactDOM from 'react-dom';
import {
    createBrowserHistory,
    History,
    createMemoryHistory,
    MemoryHistory,
    Location,
} from 'history';

import '@gmahechas/common-webcomponents/dist/common-webcomponents/common-webcomponents.css';
import {
    applyPolyfills,
    defineCustomElements,
} from '@gmahechas/common-webcomponents/loader';

import '@mf-1/index.css';
import Core from '@mf-1/core/containers/Core';
import { initEnv } from '@mf-1/environments';
import { initHelpers } from '@mf-1/helpers';

const mount = async (
    element: HTMLElement,
    {
        onNavigate,
        defaultHistory,
        initialPath,
        onAuthChange
    }: {
        onNavigate?: () => void;
        defaultHistory: History | MemoryHistory;
        initialPath: string;
        onAuthChange: () => void;
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
            <Core history={history} onAuthChange={onAuthChange} />
        </React.StrictMode>,
        element
    );

    applyPolyfills().then(() => {
        defineCustomElements();
    });

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
        mount(element, {
            defaultHistory: createBrowserHistory(),
            initialPath: '',
            onAuthChange: () => {
                console.log('isAuthenticated local');
            },
        });
    }
}

export { mount };
