import React, { useContext } from 'react';
import Button from '../Button/Button';
import { Context } from '../../context';

import s from './Sidebar.module.scss';

const Sidebar: React.FunctionComponent = () => {
    const {sortUserListBy} = useContext(Context);

    return (
        <div className={s.sidebar}>
            <p className={s.title}>Сортировка</p>
            <Button className={s.button} onClick={() => sortUserListBy('address')}>по городу</Button>
            <Button className={s.button} onClick={() => sortUserListBy('company')}>по компании</Button>
        </div>
    );
};

export default Sidebar;