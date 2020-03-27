import React from 'react';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';


let ProfileDataForm = ({ handleSubmit, profile, error }) => {


    return (
        <form onSubmit={handleSubmit} className={s.description}>

            {error &&
                <div className={style.errorBlock}>
                    {error}
                </div>
            }
            <div>
                <p><b>Имя:</b> {createField("Full name", "fullName", [], Input)} </p>

                <p><b>В поиске работы:</b> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}</p>

                <p><b>Профессиональные навыки:</b> {createField("My proffesionals skills", "lookingForAJobDescription", [], Textarea)}</p>

                <p><b>О себе:</b> {createField("About me", "aboutMe", [], Textarea)}</p>

                <button style={{
                    padding: '3px 40px',
                    background: 'white',
                    border: '1px solid gray',
                    cursor: 'pointer'
                }}>Сохранить
                </button>

            </div>
            <div style={{ marginLeft: 180 }}>
                <b>Контакты:</b> {Object.keys(profile.contacts).map((key) => {

                    return <div className={s.contact}>

                        <p><b>{key}:</b> {createField(key, "contacts." + key, [], Input)}</p>

                    </div>
                })}
            </div>

        </form>
    );
}

export default ProfileDataForm = reduxForm({ form: 'profile-edit' })(ProfileDataForm);