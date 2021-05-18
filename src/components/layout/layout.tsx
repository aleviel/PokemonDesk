import React from 'react';
import CN from 'classnames';

import Style from './layout.module.scss';

interface IProps {
    className: string | null;
}

const Layout: React.FC<IProps> = ({ children, className = null }) => {
    return <div className={CN(Style.root, className)}>{children}</div>;
};

export default Layout;
