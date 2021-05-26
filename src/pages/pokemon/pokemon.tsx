import React from 'react';

export interface IPokemon {
    id: number | null;
}

const Pokemon: React.FC<IPokemon> = ({ id }) => {
    return <div> pokemon page with {id} id </div>;
};

export default Pokemon;
