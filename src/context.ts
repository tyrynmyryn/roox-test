import React from "react";
import { SortType } from './types/sortType'

interface IContext {
    openUserInfo: (id: number) => void;
    sortUserListBy: (method: SortType) => void;
    sortMethod: SortType
}

export const Context = React.createContext<IContext>({
    openUserInfo: () => {},
    sortUserListBy: () => {},
    sortMethod: null
})