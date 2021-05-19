import React from 'react';

import Styles from './pokemonCard.module.scss';

const PokemonCard = () => {
    return (
        <div className={Styles.root}>
            <div className={Styles.infoWrap}>
                <h1 className={Styles.titleName}>Charmander</h1>
                <div className={Styles.statWrap}>
                    <div className={Styles.statItem}>
                        <div className={Styles.statValue}>52</div>
                        Attack
                    </div>
                    <div className={Styles.statItem}>
                        <div className={Styles.statValue}>43</div>
                        Defense
                    </div>
                </div>
                <div className={Styles.labelWrap}>
                    <span className={Styles.label}>Fire</span>
                </div>
            </div>
            <div className={Styles.pictureWrap}>
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
                    alt="Charmander"
                />
            </div>
        </div>
    );
};

export default PokemonCard;
