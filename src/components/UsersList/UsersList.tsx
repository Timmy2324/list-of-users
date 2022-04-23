import React, {memo} from 'react';
import s from './UsersList.module.scss';
import {UserCard} from "../UserCard/UserCard";
import {User} from "../../types/types";

type UsersListPropsType = {
    usersList: Array<User>,
}

export const UsersList = memo((props: UsersListPropsType) => {

    const {
        usersList,
    } = props;

    const componentsUsersList = usersList.map((user) => {
        return <UserCard key={user.id}
                         id={user.id}
                         name={user.name}
                         city={user.address.city}
                         company={user.company.name}
        />
    })

    return (
        <div className={s.wrapper}>
            <h2>Список пользователей</h2>
            <div className={s.wrapperUsersList}>
                {componentsUsersList}
            </div>
        </div>
    );
});