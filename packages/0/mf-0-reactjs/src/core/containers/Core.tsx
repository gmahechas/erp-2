import WithStore from '@mf-0/core/store/WithStore';
import WithRouter from '@mf-0/core/router/WithRouter';

const Core = () => {
    return (
        <WithStore>
            <WithRouter />
        </WithStore>
    );
};

export default Core;
