import { FC, useEffect } from 'react';
import { History, MemoryHistory } from 'history';

import WithRouter from '@mf-2/hoc/WithRouter';
import { env } from '../../environments';

interface IProps {
    history: History | MemoryHistory;
}
const Core: FC<IProps> = ({ history }) => {
    useEffect(() => {
        console.log('2:::', env);
    }, []);
    return <WithRouter history={history} />;
};

export default Core;
