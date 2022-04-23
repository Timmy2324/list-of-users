import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersListAPI} from "../../api/list-of-users-api";
import {setUsersList} from "../../reducers/list-of-users-reducer";
import {AppRootStateType} from "../../app/store";
import {User} from "../../types/types";
import {UsersList} from "./UsersList";
import {setLoading} from "../../reducers/app-reducer";

export const UsersListContainer = memo(() => {
    const dispatch = useDispatch();

    const usersList = useSelector<AppRootStateType, Array<User>>(state => state.listOfUsers.usersList);

    useEffect(() => {
        dispatch(setLoading(true));
        usersListAPI.gitUsers()
            .then(({data}) => {
                dispatch(setUsersList(data));
            })
            .catch((error) => {
                console.log(error.message)
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    }, []);

    return <UsersList usersList={usersList}/>;
});