import React, { useState } from 'react';
import { A } from 'hookrouter';
import PokemonCard from '../../components/pokemonCard/pokemonCard';
import Layout from '../../components/layout';
import Heading from '../../components/heading';
import Loader from '../../components/loader';
import Error from '../../components/error';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import Search from '../../components/search';

import Styles from './pokedex.module.scss';

interface IStats {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
}

interface IPokemon {
    // eslint-disable-next-line camelcase
    name_clean: string;
    abilities: Array<string>;
    stats: IStats;
    types: Array<string>;
    img: string;
    name: string;
    // eslint-disable-next-line camelcase
    base_experience: number;
    height: number;
    id: number;
    // eslint-disable-next-line camelcase
    is_default: boolean;
    order: number;
    weight: number;
}

interface IData {
    total: number;
    count: number;
    offset: number;
    limit: number;
    pokemons: IPokemon[];
}

interface IQuery {
    name?: string;
}

const Pokedex = () => {
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({});
    const debounceValue = useDebounce(searchValue, 1000);
    const { isLoading, isError, data } = useData<IData>('getPokemons', query, [debounceValue]);

    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <Error />;
    }

    const handleOnChange = (valueFromInput: string) => {
        setSearchValue(valueFromInput);
        setQuery((prevState) => ({
            ...prevState,
            name: valueFromInput,
        }));
    };
    return (
        <>
            <Layout className={Styles.root}>
                <Heading tag="h1" className={Styles.title}>
                    {data && data.total} Pokemons for you to choose your favorite
                </Heading>
                <Search searchFunc={handleOnChange} value={searchValue} />
                <div className={Styles.wrapper}>
                    {data &&
                        data.pokemons.map(({ name, stats, img, types, id }) => (
                            <A key={id} href={`/pokedex/${id}`}>
                                <PokemonCard
                                    key={id}
                                    name={name}
                                    attack={stats.attack}
                                    defense={stats.defense}
                                    img={img}
                                    types={types}
                                />
                            </A>
                        ))}
                </div>
            </Layout>
        </>
    );
};

export default Pokedex;
