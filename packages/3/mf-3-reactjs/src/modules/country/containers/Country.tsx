import { FC, useEffect } from 'react';
import { connector, PropsFromRedux } from '../store/reducers';
import { env } from '../../../environments';

interface IProps extends PropsFromRedux {}
const Country: FC<IProps> = ({ country, searchMany }) => {
    useEffect(() => {
        console.log('new 3:::', env);
    }, []);
    const handleContries = () => {
        return (
            <ul>
                {country.entity.data &&
                    country.entity.data.map((country: any) => {
                        return <li key={country.id}>{country.countryName}</li>;
                    })}
            </ul>
        );
    };
    return (
        <>
            <div>Country Page</div>
            <button onClick={() => searchMany([])}>Buscar</button>
            {handleContries()}
        </>
    );
};

export default connector(Country);
