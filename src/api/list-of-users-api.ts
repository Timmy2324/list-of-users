import axios from 'axios';
import {User} from "../types/types";

const baseURL = 'https://jsonplaceholder.typicode.com/';

const instance = axios.create({
    baseURL,
});

export const usersListAPI = {
    gitUsers() {
        return instance.get<Array<User>>(`users/`);
    }
}