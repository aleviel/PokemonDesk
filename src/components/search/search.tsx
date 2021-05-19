import React from 'react';
import CN from 'classnames';

import Styles from './search.module.scss';

interface ISearch {
    classname?: string;
}

const Search: React.FC<ISearch> = (classname) => {
    return (
        <div>
            <input
                className={CN(Styles.input)}
                type="search"
                name="searchInput"
                id="searchInput"
                placeholder="Encuentra tu pokémon..."
            />
        </div>
    );
};

export default Search;
