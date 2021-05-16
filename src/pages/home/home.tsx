import React from 'react';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Button from '../../components/button';
import Parallax from '../../components/parallax/parallax';

import Style from './home.module.scss';
import Heading from '../../components/heading';

const HomePage = () => {
    return (
        <div className={Style.root}>
            <Header />
            <Layout className={Style.contentWrap}>
                <div className={Style.contentText}>
                    <h1>
                        <b>Find</b> all your favorite <b>Pokemon</b>
                    </h1>
                    <p className={Style.text}>
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </p>
                    <Button onClick={() => {}}>See Pokemons</Button>
                    <Button onClick={() => {}} color="yellow" size="small">
                        small
                    </Button>
                    <Button onClick={() => {}} color="darkred" size="wide">
                        Wide Btn
                    </Button>
                </div>
                <Parallax />
            </Layout>
            <Heading tag="h1"> h1 </Heading>
            <Heading tag="h4"> h4 </Heading>
            <Heading tag="h6"> h6 </Heading>
            <Heading> default </Heading>
        </div>
    );
};

export default HomePage;
