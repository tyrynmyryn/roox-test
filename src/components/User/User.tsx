import React, {useContext} from 'react';
import { IUser } from '../../types/user';
import { Context } from '../../context';

import s from './User.module.scss';

interface Props {
    user: IUser;
}

const User: React.FunctionComponent<Props> = ({user}) => {
    const {openUserInfo} = useContext(Context)

    const {name, address, company} = user 
    const userInfo = [
        {title: 'ФИО', value: name},
        {title: 'город', value: address.city},
        {title: 'компания', value: company.name}
    ]

    return (
        <div className={s.user}>
            <ul className={s.userInfo}>
                {userInfo.map((info) => (
                    <li key={info.title} className={s.userInfoItem}>
                        <p className={`${s.text} ${s.title}`}>{info.title}:</p>
                        <p className={`${s.text} ${s.value}`}>{info.value}</p>
                    </li>
                ))}
            </ul>
            <button className={s.link} onClick={() => openUserInfo(user.id)}>Подробнее</button>
        </div>
    );
};

export default User;