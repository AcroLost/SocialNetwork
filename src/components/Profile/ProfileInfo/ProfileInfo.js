import React from 'react';
import s from './ProfileInfo.module.css';
import { Spin } from 'antd';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = ({ profile, updateUserStatus, status }) => {

  if (!profile) {
    return <Spin size="large" />
  }

  return (
    <div>
      <div>
        <img src={profile.photos.large} alt="ava" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>

      <ProfileStatus updateUserStatus={updateUserStatus}
        status={status} />

    </div>
  )
}

export default ProfileInfo;