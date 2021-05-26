import React from 'react';
import CN from 'classnames';
import Heading from '../heading';

import Styles from './pokemonCard.module.scss';

interface IPokemon {
    name: string;
    attack: number;
    defense: number;
    img: string;
    types: Array<string>;
}

const PokemonCard: React.FC<IPokemon> = ({ name, attack, defense, img, types }) => {
    return (
        <div className={Styles.root}>
            <div className={Styles.infoWrap}>
                <Heading tag="h5" className={Styles.titleName}>
                    {name}
                </Heading>
                <div className={Styles.statWrap}>
                    <div className={Styles.statItem}>
                        <div className={Styles.statValue}>{attack}</div>
                        Attack
                    </div>
                    <div className={Styles.statItem}>
                        <div className={Styles.statValue}>{defense}</div>
                        Defense
                    </div>
                </div>
                <div className={Styles.labelWrap}>
                    {types.map((el) => (
                        <span key={el} className={CN(Styles.label, Styles[`colorWrap_${el}`])}>
                            {el}
                        </span>
                    ))}
                </div>
            </div>
            <div className={CN(Styles.pictureWrap, Styles[`colorWrap_${types[0]}`])}>
                <img src={img} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;
