import React from 'react';
import { useRoutes } from 'hookrouter';
import { routes } from '../../routes';
import Header from '../header';
import NotFound from '../notfound';

const App = () => {
    const match = useRoutes(routes);
    return match ? (
        <>
            <Header />
            {match}
        </>
    ) : (
        <NotFound />
    );
};
export default App;
