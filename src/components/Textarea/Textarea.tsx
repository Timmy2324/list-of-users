import React, {
    DetailedHTMLProps,
    TextareaHTMLAttributes,
    ChangeEvent, KeyboardEvent
} from 'react';
import s from './Textarea.module.scss';

type DefaultTextareaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type TextareaPropsType = DefaultTextareaPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    title?: string
    error?: boolean
    titleClassName?: string
}

export const Textarea = (props: TextareaPropsType) => {

    const {
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

    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalSpanClassName = `${s.title} ${error ? s.errorTitle : ''} ${titleClassName ? titleClassName : ''}`;
    const finalTextAreaClassName = `${s.textArea} ${error ? s.errorTextArea : ''} ${className}`;

    return (
        <div className={`${s.wrapper} ${disabled ? s.disabled : ''}`}>
            <span className={finalSpanClassName}>{title}</span>
            <textarea
                disabled={disabled}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalTextAreaClassName}
                {...restProps}
            />
        </div>
    );
};