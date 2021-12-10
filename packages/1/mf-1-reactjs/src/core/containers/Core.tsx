import { FC, useEffect } from 'react';
import { History, MemoryHistory } from 'history';

import WithApollo from '@mf-1/hoc/WithApollo';
import WithStore from '@mf-1/hoc/WithStore';
import WithRouter from '@mf-1/hoc/WithRouter';
import { env } from '../../environments';

interface IProps {
    history: History | MemoryHistory;
    onAuthChange: () => void;
}
const Core: FC<IProps> = ({ history, onAuthChange }) => {
    useEffect(() => {
        console.log('1:::', env);
    }, [])
    return (
        <WithApollo>
            <WithStore>
                <WithRouter history={history} onAuthChange={onAuthChange} />
            </WithStore>
        </WithApollo>
    );
};

export default Core;
