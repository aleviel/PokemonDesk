import React from 'react';
import CN from 'classnames';

import Style from './button.module.scss';

interface IButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    size?: string | null;
    color?: string | null;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, color = null, size = null }) => {
    return (
        <button
            className={CN(Style.root, Style[size as keyof typeof Style])}
            style={{ backgroundColor: `${color}` }}
            type="button"
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
