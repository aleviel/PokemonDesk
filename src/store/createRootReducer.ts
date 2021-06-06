import { combineReducers } from 'redux';
import pokemons, { IPokemonInitialState } from './pokemons';

export interface IInitialState {
    pokemons: IPokemonInitialState;
}

const createRootReducer = () => combineReducers({ pokemons });
export default createRootReducer;
