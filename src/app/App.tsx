import React from 'react';
import './App.scss';
import {ListOfUsers} from "../feature/ListOfUsers/ListOfUsers";
import {Loader} from "../components/Loader/Loader";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";

export const App = () => {
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);

    return (
        <>
            {isLoading && <Loader/>}
            <div className="App container">
                <ListOfUsers/>
            </div>
        </>

    );
}
