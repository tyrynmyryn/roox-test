import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import UserList from '../UserList/UserList';
import UserInfo from '../UserInfo/UserInfo';
import { fetchUsersById } from '../../services/fetchUsers';
import { IUser } from '../../types/user';
import { InputsValue } from '../../types/inputsValue';
import { Context } from '../../context';
import { SortType } from '../../types/sortType';

import '../../styles/style.scss'

const App: React.FunctionComponent = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const [isUserInfo, setIsUserInfo] = useState<boolean>(false);
    const [sortMethod, setSortMethod] = useState<SortType>(null)

    const openUserInfo = (id: number) => {
        fetchUsersById(id)
            .then((user) => {
                setUser(user)
                setIsUserInfo(true)
            })
    }

    const sortUserListBy = (method: SortType) => {
        setSortMethod(method)
    }

    const submitChanges = (user: InputsValue) => {
        console.log(JSON.stringify(user))
        setIsUserInfo(false)
    }

    return (
        <Context.Provider value={{
            openUserInfo,
            sortMethod,
            sortUserListBy
        }}>
            <Layout>
                {(isUserInfo && user)
                    ? <UserInfo user={user} submit={submitChanges} />
                    : <UserList />}
            </Layout>
        </Context.Provider>
    );
};

export default App;