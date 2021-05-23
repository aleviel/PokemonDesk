import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/pokemonCard/pokemonCard';
import Layout from '../../components/layout';
import Search from '../../components/search';
import Heading from '../../components/heading';
import Loader from '../../components/loader';
import Error from '../../components/error';
import request from '../../utils/request';

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

const usePokemons = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<IData>({} as IData);

    useEffect(() => {
        (async function getPokemonData() {
            try {
                const result = await request('getPokemons', 1005);
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    return { isError, isLoading, data };
};

const Pokedex = () => {
    const { isLoading, isError, data } = usePokemons();

    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <Error />;
    }

    return (
        <>
            <Layout className={Styles.root}>
                <Heading tag="h1" className={Styles.title}>
                    {data.total} Pokemons for you to choose your favorite
                </Heading>
                <Search />
                <div className={Styles.wrapper}>
                    {data.pokemons.map(({ name, stats, img, types, id }) => (
                        <PokemonCard
                            key={id}
                            name={name}
                            attack={stats.attack}
                            defense={stats.defense}
                            img={img}
                            types={types}
                        />
                    ))}
                </div>
            </Layout>
        </>
    );
};

export default Pokedex;
