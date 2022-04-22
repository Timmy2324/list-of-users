import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    success?: boolean
    link?: boolean
}

export const Button = (props: ButtonPropsType) => {
    const {success, link, className, ...restProps} = props;

    const buttonStyle = `${s.btn} ${success ? s.success : s.default} ${link ? s.link : ''} ${className}`

    return (
        <button
            className={buttonStyle}
            {...restProps}
        />
    );
};