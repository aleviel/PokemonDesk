import React from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/layout';
import Button from '../../components/button';
import Parallax from '../../components/parallax/parallax';
import { LinkEnum } from '../../routes';

import Style from './home.module.scss';

const HomePage = () => {
    return (
        <div className={Style.root}>
            <Layout className={Style.contentWrap}>
                <div className={Style.contentText}>
                    <h1 className={Style.title}>
                        <b>Find</b> all your favorite <b>Pokemon</b>
                    </h1>
                    <p className={Style.text}>
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </p>
                    <Button
                        onClick={() => {
                            navigate(LinkEnum.POKEDEX);
                        }}>
                        See Pokemons
                    </Button>
                </div>
                <Parallax />
            </Layout>
        </div>
    );
};

export default HomePage;
