import React, {memo} from 'react';
import s from './UserProfile.module.scss';
import {User} from "../../types/types";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
import {Textarea} from "../Textarea/Textarea";

type UserProfilePropsType = {
    user: User | undefined,
    isEdit: boolean,
    onClickChangeEditMode: (isEdit: boolean) => void,
}

type FormikErrorType = {
    name?: string;
    username?: string;
    email?: string;
    street?: string;
    city?: string;
    zipcode?: string;
    phone?: string;
    website?: string;
    comment?: string;
};

export const UserProfile = memo((props :UserProfilePropsType) => {
    const {
        user,
        isEdit,
        onClickChangeEditMode,
    } = props;

    const errorMessage = 'Field is required';

    const formik = user && useFormik({
        validate: (values) => {
            const errors: FormikErrorType  = {};
            if (!values.name) {
                errors.name = errorMessage;
            }
            if (!values.username) {
                errors.username = errorMessage;
            }
            if (!values.email) {
                errors.email = errorMessage;
            }
            if (!values.street) {
                errors.street = errorMessage;
            }
            if (!values.city) {
                errors.city = errorMessage;
            }
            if (!values.zipcode) {
                errors.zipcode = errorMessage;
            }
            if (!values.phone) {
                errors.phone = errorMessage;
            }
            if (!values.website) {
                errors.website = errorMessage;
            }
            return errors;
        },
        initialValues: {
            name: user.name,
            username: user.username,
            email: user.email,
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
            phone: user.phone,
            website: user.website,
            comment: '',
        },
        onSubmit: values => {
            console.log(JSON.parse(JSON.stringify(values)));
        },
    });

    const onClickHandler = () => {
        onClickChangeEditMode(!isEdit);
        if (isEdit) {
            formik?.resetForm();
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.titleWrapper}>
                <h2>Профиль пользователя</h2>
                {user && <Button onClick={onClickHandler}>{isEdit ? 'Отмена' : 'Редактировать'}</Button>}
            </div>
            <NavLink onClick={() => onClickChangeEditMode(false)} to={`/`}>
                <Button link>К списку пользователей</Button>
            </NavLink>
            {user ?
                <form className={`${s.cardWrapper} card`} onSubmit={formik?.handleSubmit}>
                    <Input title={'ФИО'}
                           {...formik?.getFieldProps('name')}
                           placeholder={'Иванов Иван Иванович'}
                           disabled={!isEdit}
                           error={!!formik?.errors.name}
                    />
                    <Input title={'Имя пользователя'}
                           {...formik?.getFieldProps('username')}
                           placeholder={'Ivan'}
                           disabled={!isEdit}
                           error={!!formik?.errors.username}
                    />
                    <Input title={'E-mail'}
                           {...formik?.getFieldProps('email')}
                           placeholder={'example@mail.com'}
                           disabled={!isEdit}
                           error={!!formik?.errors.email}
                    />
                    <Input title={'Улица'}
                           {...formik?.getFieldProps('street')}
                           placeholder={'ул. Пушкина'}
                           disabled={!isEdit}
                           error={!!formik?.errors.street}
                    />
                    <Input title={'Город'}
                           {...formik?.getFieldProps('city')}
                           placeholder={'Москва'}
                           disabled={!isEdit}
                           error={!!formik?.errors.city}
                    />
                    <Input title={'Zip code'}
                           {...formik?.getFieldProps('zipcode')}
                           placeholder={'12324'}
                           disabled={!isEdit}
                           error={!!formik?.errors.zipcode}
                    />
                    <Input title={'Телефон'}
                           {...formik?.getFieldProps('phone')}
                           placeholder={'88005553535'}
                           disabled={!isEdit}
                           error={!!formik?.errors.phone}
                    />
                    <Input title={'Website'}
                           {...formik?.getFieldProps('website')}
                           placeholder={'www.example.com'}
                           disabled={!isEdit}
                           error={!!formik?.errors.website}
                    />
                    <Textarea title={'Комментарий'}
                           {...formik?.getFieldProps('comment')}
                           className={s.comment}
                           disabled={!isEdit}
                    />
                    <Button success disabled={!isEdit}>Отправить</Button>
                </form>
            :  <div>Пользователь не найден</div>}
        </div>
    );
});