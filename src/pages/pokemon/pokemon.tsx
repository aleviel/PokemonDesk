import React from 'react';
import { navigate } from 'hookrouter';
import CN from 'classnames';
import Heading from '../../components/heading';
import { LinkEnum } from '../../routes';
import useData from '../../hook/getData';
import Loader from '../../components/loader';
import { IPokemon } from '../pokedex/pokedex';

import Styles from './pokemon.module.scss';

export interface IPokemonID {
    id: number | null;
}

const Pokemon: React.FC<IPokemonID> = ({ id }) => {
    const { data, isLoading } = useData<IPokemon>('getPokemon', { id });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={CN(Styles.root)}>
            <div className={CN(Styles.mainWrapper, Styles[`colorWrap_${data?.types[0]}`])}>
                <button
                    type="button"
                    className={Styles.closeBox}
                    onClick={() => {
                        navigate(LinkEnum.POKEDEX);
                    }}>
                    <div className={Styles.close} />
                </button>
                <div className={Styles.imgBlock}>
                    <div className={Styles.imgWrapper}>
                        <img src={data?.img} alt="pokemon_img" />
                    </div>
                    <div className={Styles.labelWrapper}>
                        {data?.types.map((el) => (
                            <span key={el} className={CN(Styles.label, Styles[`colorWrap_${el}`])}>
                                {el}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={Styles.characteristics}>
                    <div className={Styles.header}>
                        <Heading className={Styles.name} tag="h4">
                            {data && data.name}
                        </Heading>
                        <Heading className={Styles.generation} tag="p">
                            Generation 1
                        </Heading>
                        <div className={Styles.number}>578</div>
                    </div>
                    <div className={CN(Styles.field, Styles.abilities)}>
                        Abilities <br />
                        {data?.abilities.map((el) => (
                            <span key={el}>{el} </span>
                        ))}
                    </div>
                    <div className={CN(Styles.field, Styles.midWrapper)}>
                        <div className={Styles.healthy}>
                            Healthy Points <br />
                            <b>{data?.stats.hp}</b>
                            <div className={Styles.lineWrapper}>
                                <div className={Styles.line} style={{ width: `${data?.stats.hp}%` }} />
                            </div>
                        </div>
                        <div className={Styles.experience}>
                            Experience <br />
                            <b>{data?.base_experience}</b>
                            <div className={Styles.lineWrapper}>
                                <div
                                    className={Styles.line}
                                    style={{ width: `${data && (data.base_experience / 500) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={Styles.bottomWrapper}>
                        <div className={CN(Styles.field, Styles.points)}>
                            <span>{data?.stats.defense}</span> Defense
                        </div>
                        <div className={CN(Styles.field, Styles.points)}>
                            <span>{data?.stats.attack}</span> Attack
                        </div>
                        <div className={CN(Styles.field, Styles.points)}>
                            <span>{data?.stats['special-attack']}</span> Sp attack
                        </div>
                        <div className={CN(Styles.field, Styles.points)}>
                            <span>{data?.stats['special-defense']}</span> Sp defense
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
