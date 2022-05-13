import React, { useState  } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { IUser } from '../../types/user';
import { InputsValue } from '../../types/inputsValue';

import s from './UserInfo.module.scss';

interface Props {
    user: IUser;
    submit: (user: InputsValue) => void;
}

const UserInfo: React.FunctionComponent<Props> = ({user, submit}) => {
    const {name, username, email, address, phone, website} = user
    const {city, street, zipcode} = address

    const [isReadOnly, setIsReadOnly] = useState<boolean>(true);
    const [inputsValue, setInputsValue] = useState<InputsValue>({
        name,
        username,
        email,
        street,
        city,
        zipcode,
        phone,
        website,
        comment: '',
    });

    const inputsValueKeys: string[] = Object.keys(inputsValue)
    
    console.log(inputsValueKeys)

    const inputs = [
        {label: 'Name', content: name},
        {label: 'User name', content: username},
        {label: 'E-mail', content: email},
        {label: 'Street', content: street},
        {label: 'City', content: city},
        {label: 'Zip code', content: zipcode},
        {label: 'Phone', content: phone},
        {label: 'Website', content: website},
        {label: 'Comment', content: inputsValue.comment, type: 'textarea'},
    ]

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputsValue({
            ...inputsValue,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e: React.FormEvent) => {
        submit(inputsValue);
    }


    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h2 className='title'>Профиль пользоваетля</h2>
                <Button onClick={() => setIsReadOnly(false)}>Редактировать</Button>
            </div>

        <form onSubmit={onSubmit}>
            <div className={s.content}>
                {inputs.map((item, index) => (
                    <Input
                        required={item.type ? false : true}
                        type={item.type ? 'textarea' : 'input'}
                        name={Object.keys(inputsValue)[index]}
                        key={item.label}
                        readOnly={isReadOnly}
                        // @ts-ignore
                        value={isReadOnly ? '' : inputsValue[inputsValueKeys[index]]}
                        onChange={(e) => changeHandler(e)}
                        label={item.label}
                        placeholder={item.content}
                    />
                ))}
            </div>
            <Button
                type="submit"
                disabled={isReadOnly}
                color='green'
                className={s.submitButton}
            >
                отправить
            </Button>
        </form>
        </div>
    );
};

export default UserInfo;