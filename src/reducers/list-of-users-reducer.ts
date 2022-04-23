import {User} from "../types/types";
import {Dispatch} from "redux";
import {usersListAPI} from "../api/list-of-users-api";

enum ListOfUsersActionType {
    SET_USERS_LIST = 'LIST_OF_USERS/SET_USERS_LIST',
}

type InitialStateType = {
    usersList: Array<User>
}

const initialState: InitialStateType = {
    usersList: [],
}

export type ActionType = SetUsersListType;

export const listOfUsersReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case ListOfUsersActionType.SET_USERS_LIST:{
            debugger
            return {...state, ...action.payload}
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

export const fetchUsersList = () => (dispatch: Dispatch<ActionType>) => {
    usersListAPI.gitUsers()
        .then((response) => {
            dispatch(setUsersList(response.data));
        });
}