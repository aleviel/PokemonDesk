import React from 'react';
import CN from 'classnames';

import Style from './button.module.scss';

interface IButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    size?: 'small' | 'wide' | 'default';
    color?: 'green' | 'yellow';
}

const Button: React.FC<IButtonProps> = ({ children, onClick, color = 'green', size = 'default' }) => {
    return (
        <button
            className={CN(Style.root, Style[size as keyof typeof Style], Style[color as keyof typeof Style])}
            type="button"
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
