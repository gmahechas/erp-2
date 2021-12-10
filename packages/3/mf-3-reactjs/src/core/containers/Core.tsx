import { FC, useEffect } from 'react';
import { History, MemoryHistory } from 'history';

import WithStore from '@mf-3/hoc/WithStore';
import WithRouter from '@mf-3/hoc/WithRouter';

import { env } from '../../environments';

interface IProps {
    history: History | MemoryHistory;
}
const Core: FC<IProps> = ({ history }) => {
    useEffect(() => {
        console.log('3:::', env);
    }, []);
    return (
        <WithStore>
            <WithRouter history={history} />
        </WithStore>
    );
};

export default Core;
