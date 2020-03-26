import React from 'react';
import s from './ProfileInfo.module.css';
import { Button } from 'antd';

const ProfileData = ({ profile, isOwner, onEditMode }) => {
    return <div className={s.description}>

        <div>
            <p><b>Full name:</b> {profile.fullName}</p>
            <p><b>Looking for a job:</b> {profile.lookingFoAJob ? "yes" : "no"}</p>

            {profile.lookingFoAJob &&
                <p>
                    My professional skills: {profile.lookingFoAJobDescription}
                </p>
            }

            <p><b>About me:</b> {profile.aboutMe}</p>
        </div>
        <div style={{ marginLeft: 100 }}>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
            {isOwner && <Button type="default" onClick={onEditMode}>Редактировать описание </Button>}
        </div>
    </div>
}

export default ProfileData;

export const Contact = ({ contactTitle, contactValue }) => {
    return (
        <p className={s.contact}><b>{contactTitle}:</b> {contactValue}</p>
    );
}