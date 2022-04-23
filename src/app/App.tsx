import React from 'react';
import './App.scss';
import {ListOfUsers} from "../feature/ListOfUsers/ListOfUsers";

export const App = () => {
    return (
        <div className="App container">
            <ListOfUsers/>
        </div>
    );
}
