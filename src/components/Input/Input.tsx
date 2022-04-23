import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';
import s from './Input.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    title?: string
    error?: boolean
    titleClassName?: string
}

export const Input = (props: InputPropsType) => {

    const {
        type,
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        title,
        error,
        className,
        titleClassName,
        ...restProps
    } = props;

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalSpanClassName = `${s.title} ${error ? s.errorInput : ''} ${titleClassName ? titleClassName : ''}`;
    const finalInputClassName = `${s.input} ${error ? s.errorInput : ''} ${className}`;

    return (
        <div>
            <span className={finalSpanClassName}>{title}</span>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
        </div>
    );
};