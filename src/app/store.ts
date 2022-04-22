import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));