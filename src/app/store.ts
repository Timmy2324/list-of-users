import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {listOfUsersReducer} from "../reducers/list-of-users-reducer";
import {AppReducer} from "../reducers/app-reducer";

const rootReducer = combineReducers({
    listOfUsers: listOfUsersReducer,
    app: AppReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));