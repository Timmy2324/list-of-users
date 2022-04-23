import React from 'react';
import {Button} from '../Button/Button';
import s from './Sidebar.module.scss';

export const Sidebar = () => {
    return (
        <div className={s.sidebarWrapper}>
            <h3 className={s.sidebarWrapperItem}>Сортировка</h3>
            <Button className={s.sidebarWrapperItem}>По городу</Button>
            <Button className={s.sidebarWrapperItem}>По компании</Button>
        </div>
    );
};