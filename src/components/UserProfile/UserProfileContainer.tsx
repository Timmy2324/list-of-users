import React, {memo, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {User} from "../../types/types";
import {usersListAPI} from "../../api/list-of-users-api";
import {changeEditMode, setUsersList} from "../../reducers/list-of-users-reducer";
import {UserProfile} from "./UserProfile";
import {setLoading} from "../../reducers/app-reducer";

export const UserProfileContainer = memo(() => {

    const params = useParams<{userID: string}>();

    const dispatch = useDispatch();
    const usersList = useSelector<AppRootStateType, Array<User>>(state => state.listOfUsers.usersList);
    const isEdit = useSelector<AppRootStateType, boolean>(state => state.listOfUsers.isEdit);
    const user = usersList.find((user) => String(user.id) === params.userID);

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

    const onClickChangeEditMode = () => {
        dispatch(changeEditMode(!isEdit));
    }

    return <UserProfile user={user} isEdit={isEdit} onClickChangeEditMode={onClickChangeEditMode}/>;
});