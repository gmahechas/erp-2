import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../core/store';

const WithStore: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default WithStore;
