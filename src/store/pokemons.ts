import { Dispatch } from 'react';
import request from '../utils/request';
import IStateRequest from '../interface';
import { IInitialState } from './createRootReducer';

export enum PokemonActionTypes {
    FETCH_TYPES = 'FETCH_TYPES',
    FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
    FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

export interface IPokemonInitialState {
    types: IStateRequest<string>;
}

const initialState: IPokemonInitialState = {
    types: {
        isLoading: false,
        data: null,
        error: null,
    },
};

interface TypesAction {
    type: PokemonActionTypes;
    payload?: string[];
}

type ActionTypes = TypesAction;

export const getPokemonTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;

const pokemons = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonActionTypes.FETCH_TYPES:
            return {
                ...state,
                types: {
                    isLoading: true,
                    data: null,
                    error: null,
                },
            };
        case PokemonActionTypes.FETCH_TYPES_RESOLVE:
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: action.payload,
                    error: null,
                },
            };
        case PokemonActionTypes.FETCH_TYPES_REJECT:
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: null,
                    error: action.payload,
                },
            };
        default:
            return {
                ...state,
            };
    }
};

export const getTypesAction = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({ type: PokemonActionTypes.FETCH_TYPES });
        try {
            const response = await request<string[]>('getPokemonTypes', {});
            dispatch({ type: PokemonActionTypes.FETCH_TYPES_RESOLVE, payload: response });
        } catch (error) {
            dispatch({ type: PokemonActionTypes.FETCH_TYPES_REJECT });
        }
    };
};

export default pokemons;
