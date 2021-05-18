import React, { useEffect, useState } from 'react';

import SmallPokeBallPng from './assets/smallPokeBall.png';
import CloudPng from './assets/smallCloud.png';
import CloudBigPng from './assets/bigCloud.png';
import PikachuPng from './assets/Pikachu.png';
import PokeBallPng from './assets/bigPokeBall.png';

import Style from './parallax.module.scss';

const Parallax = () => {
    const [coords, setCoords] = useState({ X: 0, Y: 0 });

    const handleMouseMove = ({ screenX, screenY }: MouseEvent) => {
        setCoords({ X: screenX, Y: screenY });
    };

    const translateFunc = (coefficient: number): string =>
        `translate(${coords.X * coefficient}%, ${coords.Y * coefficient}%)`;

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className={Style.root}>
            <div className={Style.smallPokeBall} style={{ transform: translateFunc(-0.01) }}>
                <img src={SmallPokeBallPng} alt="Small PokeBall" />
            </div>
            <div className={Style.cloud} style={{ transform: translateFunc(0.01) }}>
                <img src={CloudPng} alt="Cloud PokeBall" />
            </div>
            <div className={Style.cloudBig} style={{ transform: translateFunc(-0.003) }}>
                <img src={CloudBigPng} alt="Cloud Big PokeBall" />
            </div>
            <div className={Style.pokeBall} style={{ transform: translateFunc(0.001) }}>
                <img src={PokeBallPng} alt="Big PokeBall" />
            </div>
            <div className={Style.pikachu} style={{ transform: translateFunc(0.01) }}>
                <img src={PikachuPng} alt="Cloud PokeBall" />
            </div>
        </div>
    );
};
export default Parallax;
