import { FC } from 'react';
import { connector, PropsFromRedux } from '../store/reducers';

interface IProps extends PropsFromRedux {}
const Country: FC<IProps> = ({ country, searchMany }) => {
    const handleContries = () => {
        return (
            <ul>
                {country.entity.data &&
                    country.entity.data.map((country: any) => {
                        return <li key={country.id}>{country.title}</li>;
                    })}
            </ul>
        );
    };

    const handleSearchMany = () => {
        searchMany('search many');
    };

    return (
        <>
            <div>Country Page</div>
            <button onClick={handleSearchMany}>Buscar</button>
            {handleContries()}
        </>
    );
};

export default connector(Country);
