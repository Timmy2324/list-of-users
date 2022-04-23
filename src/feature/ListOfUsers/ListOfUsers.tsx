import React, {memo} from 'react';
import s from './ListOfUsers.module.scss';
import {Sidebar} from "../../components/Sidebar/Sidebar";
import {UsersListContainer} from "../../components/UsersList/UsersListContainer";
import {Route, Switch} from "react-router-dom";
import {UserProfileContainer} from "../../components/UserProfile/UserProfileContainer";


export const ListOfUsers = memo(() => {
    return (
        <div className={s.wrapper}>
            <Sidebar/>
            <div className={s.mainContentWrapper}>
                <Switch>
                    <Route exact path='/:userID'>
                        <UserProfileContainer/>
                    </Route>
                    <Route exact path='/'>
                        <UsersListContainer/>
                    </Route>
                </Switch>

            </div>
        </div>
    );
});