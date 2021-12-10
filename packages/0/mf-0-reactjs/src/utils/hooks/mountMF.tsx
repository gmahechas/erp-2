import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const mountMF = (mount: Function) => {
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
        });
        history.listen(onParentNavigate);
    };
    useEffect(() => {
        initMount();
    }, []);
    return ref;
};

export default mountMF;
