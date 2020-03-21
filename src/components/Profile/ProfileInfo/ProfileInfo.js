import React from 'react';
import s from './ProfileInfo.module.css';
import { Spin } from 'antd';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = ({ profile }) => {

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

      <ProfileStatus />

    </div>
  )
}

export default ProfileInfo;