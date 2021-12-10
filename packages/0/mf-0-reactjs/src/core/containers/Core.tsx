import WithStore from '@mf-0/hoc/WithStore';
import WithRouter from '@mf-0/hoc/WithRouter';
import { env } from '../../environments';

const Core = () => {
    console.log('new 0:::', env);
    return (
        <WithStore>
            <WithRouter />
        </WithStore>
    );
};

export default Core;
