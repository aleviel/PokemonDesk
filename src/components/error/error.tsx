import React from 'react';
import Layout from '../layout';

import Styles from './error.module.scss';
import Heading from '../heading';

const Error = () => {
    return (
        <Layout className={Styles.root}>
            <Heading tag="h1" className={Styles.title}>
                apparently, something went wrong.
            </Heading>
            <div className={Styles.loadingio_spinner_bean_eater_mlq12usva6}>
                <div className={Styles.ldio_2bwr6fq35k7}>
                    <div>
                        <div />
                        <div />
                        <div />
                    </div>
                    <div>
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Error;
