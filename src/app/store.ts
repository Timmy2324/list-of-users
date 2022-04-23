import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {listOfUsersReducer} from "../reducers/list-of-users-reducer";

const rootReducer = combineReducers({
    listOfUsers: listOfUsersReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));