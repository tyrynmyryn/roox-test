import React from 'react';
import s from './Input.module.scss';

interface Props {
    type?: 'input' | 'textarea';
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value?: string;
    label?: string;
    readOnly?: boolean;
    placeholder?: string;
    required?: boolean;
}

const Input: React.FunctionComponent<Props> = ({
    type = 'input', label, value, required = true, name, onChange, readOnly = false, placeholder = ''
}) => {
    if (type === 'textarea') {
        return (
            <div className={s.field}>
                <p className={s.label}>{label}</p>
                <textarea
                    name={name}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    className={`${s.input} ${s.textarea}`}
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    }
    return (
        <div className={s.field}>
            <p className={s.label}>{label}</p>
            <input
                required={required}
                name={name}
                type="text" 
                placeholder={placeholder}
                readOnly={readOnly}
                className={s.input}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;