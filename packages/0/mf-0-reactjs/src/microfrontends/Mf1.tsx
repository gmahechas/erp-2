import { FC, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ISigninAuth } from '@gmahechas/erp-common';
import { mount } from 'mf1/Mf1App';
import { connector, PropsFromRedux } from '@mf-0/auth/store/reducers';

interface IProps extends PropsFromRedux {}
const Mf1: FC<IProps> = ({ signin }) => {
    const ref = useRef(null);
    const history = useHistory();
    const initMount = async () => {
        const { onParentNavigate } = await mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }: Location) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            initialPath: history.location.pathname,
            signin
        });
        history.listen(onParentNavigate);
    };
    useEffect(() => {
        initMount();
    }, []);
    return <div ref={ref} />;
};

export default connector(Mf1);
