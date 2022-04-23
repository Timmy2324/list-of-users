import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, memo} from 'react';
import s from './Input.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    title?: string
    error?: boolean
    titleClassName?: string
}

export const Input = memo((props: InputPropsType) => {

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
        disabled,
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

    const finalSpanClassName = `${s.title} ${error ? s.errorTitle : ''} ${titleClassName ? titleClassName : ''}`;
    const finalInputClassName = `${s.input} ${error ? s.errorInput : ''} ${className}`;

    return (
        <div className={`${s.wrapper} ${disabled ? s.disabled : ''}`}>
            <span className={finalSpanClassName}>{title}</span>
            <input
                disabled={disabled}
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
        </div>
    );
});