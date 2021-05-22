import React from 'react';
import { A, usePath } from 'hookrouter';
import CN from 'classnames';

import { GENERAL_MENU } from '../../routes';
import { ReactComponent as HeaderLogoSvg } from './assets/logo.svg';

import Style from './header.module.scss';

const Header = () => {
    const path = usePath();
    return (
        <div className={CN(Style.root)}>
            <div className={Style.wrap}>
                <div className={Style.header_logo}>
                    <HeaderLogoSvg />
                </div>
                <div className={Style.header_menu}>
                    {GENERAL_MENU.map(({ title, link }) => {
                        return (
                            <A
                                className={CN(Style.menuLink, { [Style.activeLink]: link === path })}
                                key={title}
                                href={link}>
                                {title}
                            </A>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Header;
