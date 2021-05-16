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

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className={Style.root}>
            <div
                className={Style.smallPokeBall}
                style={{ transform: `translate(${coords.X * 0.01}%, ${coords.Y * 0.01}%)` }}>
                <img src={SmallPokeBallPng} alt="Small PokeBall" />
            </div>
            <div className={Style.cloud} style={{ transform: `translate(${coords.X * 0.01}%, ${coords.Y * 0.01}%)` }}>
                <img src={CloudPng} alt="Cloud PokeBall" />
            </div>
            <div
                className={Style.cloudBig}
                style={{ transform: `translate(${coords.X * 0.01}%, ${coords.Y * 0.01}%)` }}>
                <img src={CloudBigPng} alt="Cloud Big PokeBall" />
            </div>
            <div
                className={Style.pokeBall}
                style={{ transform: `translate(${coords.X * 0.01}%, ${coords.Y * 0.01}%)` }}>
                <img src={PokeBallPng} alt="Big PokeBall" />
            </div>
            <div className={Style.pikachu} style={{ transform: `translate(${coords.X * 0.01}%, ${coords.Y * 0.01}%)` }}>
                <img src={PikachuPng} alt="Cloud PokeBall" />
            </div>
        </div>
    );
};
export default Parallax;
