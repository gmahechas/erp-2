import { FC } from 'react';
import { History, MemoryHistory } from 'history';
import { ISigninAuth } from '@gmahechas/erp-common';

import WithStore from '@mf-1/hoc/WithStore';
import WithRouter from '@mf-1/hoc/WithRouter';

interface IProps {
    history: History | MemoryHistory;
    signin: (data: ISigninAuth) => void;
}
const Core: FC<IProps> = ({ history, signin }) => {
    return (
        <WithStore>
            <WithRouter history={history} signin={signin} />
        </WithStore>
    );
};

export default Core;
