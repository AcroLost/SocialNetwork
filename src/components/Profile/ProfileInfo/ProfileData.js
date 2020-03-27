import React from 'react';
import s from './ProfileInfo.module.css';
import { Button } from 'antd';

const ProfileData = ({ profile, isOwner, onEditMode }) => {

    return <div className={s.description}>

        <div>
            <p className={s.fullName}>{profile.fullName}</p>
            <p><b>В поиске работы:</b> {profile.lookingForAJob ? "да" : "нет"}</p>

            {profile.lookingForAJob &&
                <p>
                    <b>Профессиональные навыки:</b> {profile.lookingForAJobDescription}
                </p>
            }

            <p className={s.aboutMe}><b>О себе:</b> {profile.aboutMe}</p>

            {isOwner && <Button type="default" onClick={onEditMode}>Редактировать описание </Button>}
        </div>
        <div style={{ marginLeft: 100 }}>
            <div>
                <b>Контакты:</b> {Object.keys(profile.contacts).map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>

        </div>
    </div>
}

export default ProfileData;

export const Contact = ({ contactTitle, contactValue }) => {
    return (
        <p className={s.contact}><b>{contactTitle}:</b> {contactValue}</p>
    );
}