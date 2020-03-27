import React from 'react';
import s from './ProfileInfo.module.css';

import userPhoto from '../../../image/ava.jpg';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';

const ProfileInfo = ({ savePhoto, isOwner, profile, updateUserStatus, status, saveProfile, onEditMode, onSubmit, editMode }) => {

  const onPhotoSelect = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0])
    }
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
      <div style={{ marginLeft: 10 }}>
        <ProfileStatus updateUserStatus={updateUserStatus}
          status={status}
          isOwner={isOwner} />
        <div>

          {editMode

            ? <ProfileDataForm initialValues={profile}
              profile={profile}
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