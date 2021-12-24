import { FC } from 'react';
import { History, MemoryHistory } from 'history';

import WithStore from '@mf-3/core/store/WithStore';
import WithRouter from '@mf-3/core/router/WithRouter';

interface IProps {
    history: History | MemoryHistory;
}
const Core: FC<IProps> = ({ history }) => {
    return (
        <WithStore>
            <WithRouter history={history} />
        </WithStore>
    );
};

export default Core;
