import React from 'react';
import s from './ProfileInfo.module.css';
import { Spin } from 'antd';
import ProfileStatus from './ProfileStatus';

import userPhoto from '../../../image/ava.jpg';

const ProfileInfo = ({ profile, updateUserStatus, status }) => {

  if (!profile) {
    return <Spin size="large" />
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.profilePhoto}>
        <img src={profile.photos.large || userPhoto} alt="ava" />
      </div>
      <div className={s.descriptionBlock}>
        description
      </div>

      <ProfileStatus updateUserStatus={updateUserStatus}
        status={status} />

    </div>
  )
}

export default ProfileInfo;