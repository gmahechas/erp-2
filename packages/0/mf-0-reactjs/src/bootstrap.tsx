import React from 'react';
import ReactDOM from 'react-dom';

import '@gmahechas/common-webcomponents/dist/common-webcomponents/common-webcomponents.css';
import {
    applyPolyfills,
    defineCustomElements,
} from '@gmahechas/common-webcomponents/loader';

import '@mf-0/index.css';
import Core from '@mf-0/core/containers/Core';
import { initEnv } from './environments';

const mount = async () => {
    await initEnv();
    ReactDOM.render(
        <React.StrictMode>
            <Core />
        </React.StrictMode>,
        document.getElementById('root')
    );

    applyPolyfills().then(() => {
        defineCustomElements();
    });
};

mount();
