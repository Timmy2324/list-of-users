import {User} from "../types/types";

enum ListOfUsersActionType {
    SET_USERS_LIST = 'LIST_OF_USERS/SET_USERS_LIST',
    CHANGE_EDIT_MODE = 'LIST_OF_USERS/CHANGE_EDIT_MODE',
    SORTED_BY_CITY = 'LIST_OF_USERS/SORTED_BY_CITY',
    SORTED_BY_NAME = 'LIST_OF_USERS/SORTED_BY_NAME',
}

type InitialStateType = {
    usersList: Array<User>,
    isEdit: boolean,
}

const initialState: InitialStateType = {
    usersList: [],
    isEdit: false,
}

export type ActionType = SetUsersListType
                       | ChangeEditModeType
                       | SortedByCityType
                       | SortedByNameType;

export const listOfUsersReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case ListOfUsersActionType.SET_USERS_LIST:
        case ListOfUsersActionType.CHANGE_EDIT_MODE:
            return {...state, ...action.payload};
        case ListOfUsersActionType.SORTED_BY_CITY:
            return {
                ...state, usersList: [...state.usersList.sort((a, b) => {
                    const cityA = a.address.city.toUpperCase();
                    const cityB = b.address.city.toUpperCase();
                    if (cityA < cityB) {
                        return -1;
                    }
                    if (cityA > cityB) {
                        return 1;
                    }
                    return 0;
                })]
            }
        case ListOfUsersActionType.SORTED_BY_NAME:
            return {
                ...state, usersList: [...state.usersList.sort((a, b) => {
                    const cityA = a.name.toUpperCase();
                    const cityB = b.name.toUpperCase();
                    if (cityA < cityB) {
                        return -1;
                    }
                    if (cityA > cityB) {
                        return 1;
                    }
                    return 0;
                })]
            }
        default:
            return state;
    }
}

type SetUsersListType = ReturnType<typeof setUsersList>;
export const setUsersList = (usersList: Array<User>) => {
    return {
        type: ListOfUsersActionType.SET_USERS_LIST,
        payload: {
            usersList,
        },
    } as const
}

type ChangeEditModeType = ReturnType<typeof changeEditMode>;
export const changeEditMode = (isEdit: boolean) => {
    return {
        type: ListOfUsersActionType.CHANGE_EDIT_MODE,
        payload: {
            isEdit,
        },
    } as const
}

type SortedByCityType = ReturnType<typeof sortedByCity>;
export const sortedByCity = () => {
    return {
        type: ListOfUsersActionType.SORTED_BY_CITY,
    } as const
}

type SortedByNameType = ReturnType<typeof sortedByName>;
export const sortedByName = () => {
    return {
        type: ListOfUsersActionType.SORTED_BY_NAME,
    } as const
}