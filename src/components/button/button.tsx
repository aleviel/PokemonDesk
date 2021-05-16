import React from 'react';

import Style from './button.module.scss';

interface IButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
    return (
        <button className={Style.root} type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
