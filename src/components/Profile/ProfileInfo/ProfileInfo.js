import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import { Spin } from 'antd';

import userPhoto from '../../../image/ava.jpg';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';

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
      <div>
        <div className={s.profilePhoto}>
          <img src={profile.photos.large || userPhoto} alt="ava" />
        </div>
        <div style={{ marginTop: 5 }}>
          {isOwner && <input type="file" onChange={onPhotoSelect} />}
        </div>
      </div>
      <div>
        <ProfileStatus updateUserStatus={updateUserStatus}
          status={status} />
        <div>

          {editMode

            ? <ProfileDataForm initialValues={profile}
              profile={profile}
              isOwner={isOwner}
              onSubmit={onSubmit} />

            : <ProfileData profile={profile}
              isOwner={isOwner}
              onEditMode={onEditMode}
            />}

        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;