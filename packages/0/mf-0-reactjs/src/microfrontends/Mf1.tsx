import { FC, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'mf1/Mf1App';

interface IProps {}
const Mf1: FC<IProps> = () => {
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
            onAuthChange: () => {
                console.log('isAuthenticated');
            },
        });
        history.listen(onParentNavigate);
    };
    useEffect(() => {
        initMount();
    }, []);
    return <div ref={ref} />;
};

export default Mf1;
