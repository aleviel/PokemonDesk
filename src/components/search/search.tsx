import React, { useState } from 'react';
import CN from 'classnames';

import Styles from './search.module.scss';

interface ISearch {
    classname?: string;
}

const Search: React.FC<ISearch> = (classname) => {
    const [searchValue, setSearchValue] = useState('');

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <div>
            <input
                className={CN(Styles.input, classname)}
                type="search"
                name="searchInput"
                id="searchInput"
                placeholder="Encuentra tu pokémon..."
                value={searchValue}
                onChange={onSearchChange}
            />
        </div>
    );
};

export default Search;
