import React from 'react';
import s from './ProfileInfo.module.css';
import { Spin } from 'antd';

import userPhoto from '../../../image/ava.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ savePhoto, isOwner, profile, updateUserStatus, status }) => {

  const onPhotoSelect = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0])
    }
  }


  if (!profile) {
    return <Spin size="large" />
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.profilePhoto}>
        <img src={profile.photos.large || userPhoto} alt="ava" />
      </div>
      <div>
        {isOwner && <input type="file" onChange={onPhotoSelect} />}
      </div>
      <div>
        <div className={s.descriptionBlock}>
          description
      </div>

        <ProfileStatus updateUserStatus={updateUserStatus}
          status={status} />
      </div>
    </div>
  )
}

export default ProfileInfo;