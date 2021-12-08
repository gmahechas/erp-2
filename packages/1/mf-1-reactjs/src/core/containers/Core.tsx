import { FC } from 'react';
import { History, MemoryHistory } from 'history';

import WithStore from '@mf-1/hoc/WithStore';
import WithRouter from '@mf-1/hoc/WithRouter';

interface IProps {
    history: History | MemoryHistory;
    onAuthChange: () => void;
}

const Core: FC<IProps> = ({ history, onAuthChange }) => {
    return (
        <WithStore>
            <WithRouter history={history} onAuthChange={onAuthChange} />
        </WithStore>
    );
};

export default Core;
