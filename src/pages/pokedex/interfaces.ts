export interface IStats {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
}

export interface IPokemon {
    // eslint-disable-next-line camelcase
    name_clean: string;
    abilities: Array<string>;
    stats: IStats;
    types: Array<string>;
    img: string;
    name: string;
    // eslint-disable-next-line camelcase
    base_experience: number;
    height: number;
    id: number;
    // eslint-disable-next-line camelcase
    is_default: boolean;
    order: number;
    weight: number;
}

export interface IData {
    total: number;
    count: number;
    offset: number;
    limit: number;
    pokemons: IPokemon[];
}

export interface IQuery {
    name?: string;
    limit?: number;
}
