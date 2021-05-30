import React from 'react';
import CN from 'classnames';

import Styles from './search.module.scss';

interface ISearch {
    classname?: string;
    searchFunc: (T: string) => void;
    value: string;
}

const Search: React.FC<ISearch> = ({ classname, searchFunc, value }) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchFunc && searchFunc(event.target.value);
    };

    return (
        <div>
            <input
                className={CN(Styles.input, classname)}
                type="search"
                name="searchInput"
                id="searchInput"
                placeholder="Encuentra tu pokémon..."
                onChange={handleOnChange}
                value={value}
            />
        </div>
    );
};

export default Search;
