import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import s from './Layout.module.scss'; 

interface Props {
    children: JSX.Element
}

const Layout:React.FunctionComponent<Props> = ({children}) => {
    return (
        <div className={s.layout}>
            <Sidebar/>
            <div className={s.content}>
                {children}
            </div>
        </div>
    );
};

export default Layout;