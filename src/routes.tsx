import React from 'react';
import HomePage from './pages/home';
import Pokedex from './pages/pokedex';
import EmptyPage from './pages/empty';

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documentation',
}

interface IGENERAL_MENU {
    title: string;
    link: LinkEnum;
    component: () => JSX.Element;
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

interface IRoutes {
    [i: string]: () => JSX.Element;
}

export const routes = GENERAL_MENU.reduce((acc: IRoutes, item) => {
    acc[item.link] = item.component;
    return acc;
}, {});
