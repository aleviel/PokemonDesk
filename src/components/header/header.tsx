import React from 'react';

import { ReactComponent as HeaderLogoSvg } from './assets/logo.svg';

import Style from './header.module.scss';

interface IMenu {
    id: number;
    title: string;
    link: string;
}

const Links: IMenu[] = [
    {
        id: 1,
        title: 'Home',
        link: '#',
    },
    {
        id: 2,
        title: 'Pokédex',
        link: '#',
    },
    {
        id: 3,
        title: 'Legendaries',
        link: '#',
    },
    {
        id: 4,
        title: 'Documentation',
        link: '#',
    },
];

const Header = () => {
    return (
        <div className={Style.root}>
            <div className={Style.wrap}>
                <div className={Style.header_logo}>
                    <HeaderLogoSvg />
                </div>
                <div className={Style.header_menu}>
                    {Links.map(({ id, title, link }) => {
                        return (
                            <a className={Style.menuLink} key={id} href={link}>
                                {title}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Header;
