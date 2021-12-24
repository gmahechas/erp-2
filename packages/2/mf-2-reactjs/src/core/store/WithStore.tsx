import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '@mf-2/core/store';

const WithStore: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default WithStore;
