import React, {memo} from 'react';
import s from './UserCard.module.scss';
import {Button} from "../Button/Button";
import {NavLink} from "react-router-dom";

type UserCardPropsType = {
    id: number,
    name: string,
    city: string,
    company: string,
}

export const UserCard = memo((props: UserCardPropsType) => {

    const {
        id,
        name,
        city,
        company,
    } = props;

    return (
        <div className={s.cardWrapper}>
            <div className={s.userInfo}>
                <div className={s.userInfoItem}>
                    <span className={s.userInfoItemSpan}>ФИО:</span> {name}
                </div>
                <div className={s.userInfoItem}>
                    <span className={s.userInfoItemSpan}>Город:</span> {city}
                </div>
                <div className={s.userInfoItem}>
                    <span className={s.userInfoItemSpan}>Компания:</span> {company}
                </div>
            </div>
            <div className={s.buttonMore}>
                <NavLink to={`/${id}`}>
                    <Button link>Подробнее</Button>
                </NavLink>
            </div>
        </div>
    );
});