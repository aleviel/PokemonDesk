import React from 'react';
import { useRoutes } from 'hookrouter';
import { routes } from '../../routes';
import Header from '../header';
import NotFound from '../notfound';

import Styles from './app.module.scss';

const App = () => {
    const match = useRoutes(routes) || <NotFound />;
    return (
        <>
            <div className={Styles.root}>
                <Header />
                {match}
            </div>
        </>
    );
};
export default App;
