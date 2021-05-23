import React from 'react';
import Layout from '../layout';

import Styles from './footer.module.scss';

const Footer = () => {
    return (
        <Layout className={Styles.root}>
            Make with <span className={Styles.heart}>❤</span>
        </Layout>
    );
};

export default Footer;
