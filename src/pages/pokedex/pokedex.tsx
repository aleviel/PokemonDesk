import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { A } from 'hookrouter';

import PokemonCard from '../../components/pokemonCard/pokemonCard';
import Layout from '../../components/layout';
import Heading from '../../components/heading';
import Loader from '../../components/loader';
import Error from '../../components/error';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import Search from '../../components/search';
import { LinkEnum } from '../../routes';
import { getPokemonTypes, getPokemonTypesLoading, getTypesAction } from '../../store/pokemons';
import { IData, IQuery } from './interfaces';

import Styles from './pokedex.module.scss';

const Pokedex = () => {
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({ limit: 27 });
    const debounceValue = useDebounce(searchValue, 1000);
    const { isLoading, isError, data } = useData<IData>('getPokemons', query, [debounceValue]);

    const dispatch = useDispatch();
    const PokemonTypes = useSelector(getPokemonTypes);
    const IsTypesLoading = useSelector(getPokemonTypesLoading);

    useEffect(() => {
        dispatch(getTypesAction());
    }, []);

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
                <div
                    style={{
                        width: '100%',
                        marginBottom: '24px',
                        textAlign: 'center',
                        border: '1px solid darkblue',
                        padding: '10px',
                    }}>
                    all types of pokemon
                    <div
                        style={{
                            paddingTop: '20px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                        {IsTypesLoading ? (
                            <Loader />
                        ) : (
                            PokemonTypes?.map((el) => (
                                <span key={el} style={{ padding: '5px', border: '1px solid tomato' }}>
                                    {' '}
                                    {el}
                                </span>
                            ))
                        )}
                    </div>
                </div>

                <div className={Styles.wrapper}>
                    {data &&
                        data.pokemons.map(({ name, stats, img, types, id }) => (
                            <A key={id} href={`${LinkEnum.POKEDEX}/${id}`}>
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
