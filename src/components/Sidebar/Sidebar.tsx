import React, {memo} from 'react';
import {Button} from '../Button/Button';
import s from './Sidebar.module.scss';
import {useDispatch} from "react-redux";
import {sortedByCity, sortedByName} from "../../reducers/list-of-users-reducer";

export const Sidebar = memo(() => {

    const dispatch = useDispatch();

    const onClickSortByCity = () => {
        dispatch(sortedByCity());
    }

    const onClickSortByName = () => {
        dispatch(sortedByName());
    }

    return (
        <div className={s.sidebar}>
            <div className={s.wrapper}>
                <h3 className={s.item}>Сортировка</h3>
                <Button className={s.item} onClick={onClickSortByName}>По Имени</Button>
                <Button className={s.item} onClick={onClickSortByCity}>По Городу</Button>
            </div>
        </div>
    );
});