import WithStore from '@mf-0/hoc/WithStore';
import WithRouter from '@mf-0/hoc/WithRouter';

const Core = () => {
    return (
        <WithStore>
            <WithRouter />
        </WithStore>
    );
};

export default Core;
