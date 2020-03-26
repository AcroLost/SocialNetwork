import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import { Spin } from 'antd';

import userPhoto from '../../../image/ava.jpg';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ savePhoto, isOwner, profile, updateUserStatus, status, saveProfile }) => {

  const [editMode, setEditMode] = useState(false);

  const onPhotoSelect = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0])
    }
  }

  const onEditMode = () => {
    setEditMode(true);
  }

  const onSubmit = (formData) => {
    saveProfile(formData)
      .then(() => {
        setEditMode(false);
      })
  }

  if (!profile) {
    return <Spin size="large" />
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.profilePhoto}>
        <img src={profile ? profile.photos.large : userPhoto} alt="ava" />
      </div>
      <div>
        {isOwner && <input type="file" onChange={onPhotoSelect} />}
      </div>

      {editMode

        ? <ProfileDataForm initialValues={profile}
          profile={profile}
          isOwner={isOwner}
          onSubmit={onSubmit} />

        : <ProfileData profile={profile}
          isOwner={isOwner}
          onEditMode={onEditMode}
        />}


      <div>
        <ProfileStatus updateUserStatus={updateUserStatus}
          status={status} />
      </div>
    </div>
  )
}

export default ProfileInfo;

const ProfileData = ({ profile, isOwner, onEditMode }) => {
  return <div>
    {isOwner && <button onClick={onEditMode}>Edit Mode</button>}

    <p>Full name: {profile.fullName}</p>
    <p>Looking for a job: {profile.lookingFoAJob ? "yes" : "no"}</p>

    {profile.lookingFoAJob &&
      <p>
        My professional skills: {profile.lookingFoAJobDescription}
      </p>
    }

    <p>About me: {profile.aboutMe}</p>

    <div>
      Contacts: {Object.keys(profile.contacts).map((key) => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
    })}
    </div>
  </div>
}

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <p className={s.contact}>{contactTitle}: {contactValue}</p>
  );
}