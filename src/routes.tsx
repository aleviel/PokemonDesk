import React, { PropsWithChildren } from 'react';
import HomePage from './pages/home';
import Pokedex from './pages/pokedex';
import EmptyPage from './pages/empty';
import Pokemon from './pages/pokemon';
import { IPokemon } from './pages/pokemon/pokemon';

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documentation',
    POKEMON = '/pokedex/:id',
}

interface IGENERAL_MENU {
    title: string;
    link: LinkEnum;
    component: (props: PropsWithChildren<any>) => JSX.Element;
}

export const GENERAL_MENU: IGENERAL_MENU[] = [
    {
        title: 'Home',
        link: LinkEnum.HOME,
        component: () => <HomePage />,
    },
    {
        title: 'Pokédex',
        link: LinkEnum.POKEDEX,
        component: () => <Pokedex />,
    },
    {
        title: 'Legendaries',
        link: LinkEnum.LEGENDARIES,
        component: () => <EmptyPage title="legendaries" />,
    },
    {
        title: 'Documentation',
        link: LinkEnum.DOCUMENTATION,
        component: () => <EmptyPage title="documentation" />,
    },
];

const SECOND_MENU: IGENERAL_MENU[] = [
    {
        title: 'Pokemon',
        link: LinkEnum.POKEMON,
        component: ({ id }: IPokemon) => <Pokemon id={id} />,
    },
];

interface IRoutes {
    [i: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export const routes = [...GENERAL_MENU, ...SECOND_MENU].reduce((acc: IRoutes, item) => {
    acc[item.link] = item.component;
    return acc;
}, {});
