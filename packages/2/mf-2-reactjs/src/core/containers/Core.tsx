import { FC } from 'react';
import { History, MemoryHistory } from 'history';

import WithRouter from '@mf-2/hoc/WithRouter';

interface IProps {
    history: History | MemoryHistory;
}
const Core: FC<IProps> = ({ history }) => {
    return <WithRouter history={history} />;
};

export default Core;
