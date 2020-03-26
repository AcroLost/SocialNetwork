import React from 'react';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import { Contact } from './ProfileInfo';
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';

let ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>

            <button>Save</button>

            {error &&
                <div className={style.errorBlock}>
                    {error}
                </div>
            }

            <p>Full name: {createField("Full name", "fullName", [], Input)} </p>

            <p>Looking for a job: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}</p>

            <p>My professional skills: {createField("My proffesionals skills", "lookingForAJobDescription", [], Textarea)}</p>

            <p>About me: {createField("About me", "aboutMe", [], Textarea)}</p>

            <div>
                Contacts: {Object.keys(profile.contacts).map((key) => {
                return <div className={s.contact}>

                    <p>{key}: {createField(key, "contacts." + key, [], Input)}</p>

                </div>
            })}
            </div>

        </form>
    );
}

export default ProfileDataForm = reduxForm({ form: 'profile-edit' })(ProfileDataForm);