import React from 'react';

import Styles from './loader.module.scss';
import Layout from '../layout';

const Loader = () => {
    return (
        <Layout className={Styles.root}>
            <div className={`${Styles.loadingio_spinner_cube_wv2js7zcjw8}`}>
                <div className={`${Styles.ldio_vcajecrg4la}`}>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </Layout>
    );
};

export default Loader;
