import React, { useEffect, useState, useContext } from 'react';
import User from '../User/User';
import Loader from '../Loader/Loader';
import { fetchUsers } from '../../services/fetchUsers';
import { IUser } from '../../types/user';
import { SortType } from '../../types/sortType';
import { Context } from '../../context';

const UserList: React.FunctionComponent = () => {
    const [data, setData] = useState<IUser[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { sortMethod } = useContext(Context)

    useEffect(() => {
        fetchUsers().then((users) => {
            setData(users);
            setIsLoading(false);
        })
    }, [])

    const sortByField = (field: SortType) => {
        switch(field) {
            case 'address':
                return (a: IUser, b: IUser) => a[field].city > b[field].city ? 1 : -1
            case 'company':
                return (a: IUser, b: IUser) => a[field].name > b[field].name ? 1 : -1
        }
    }
    
    const renderUsers = () => {
        if (data) {
            if (sortMethod) {
                return (
                    data.sort(sortByField(sortMethod)).map((user) => (
                        <User key={user.id} user={user} />
                    ))
                )
            }
            return (
                data.map((user) => (
                    <User key={user.id} user={user} />
                ))
            )
        }
        return null
    }

    return (
        <>
        <h2 className="title">Список пользователей</h2>
        {!isLoading
            ? renderUsers()
            : <Loader />}
        </>
    );
};

export default UserList;