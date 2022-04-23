import React from 'react';
import s from './UserCard.module.scss';
import {Button} from "../Button/Button";

type UserCardPropsType = {
    name: string,
    city: string,
    company: string,
    onClick: () => void,
}

export const UserCard = (props: UserCardPropsType) => {

    const {
        name,
        city,
        company,
        onClick,
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
                <Button link onClick={onClick}>Подробнее</Button>
            </div>
        </div>
    );
};