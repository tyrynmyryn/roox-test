import React from 'react';
import s from './Button.module.scss';

interface Props {
    children: string;
    onClick?: () => void;
    disabled?: boolean;
    color?: 'green' | 'violet';
    className?: string;
    type?: 'button' | 'submit';
}

const Button: React.FunctionComponent<Props> = ({type = 'button', children, onClick, disabled = false, color = 'violet', className = ''}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${s.button} ${color === 'violet' ? s.violet : s.green}  ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;