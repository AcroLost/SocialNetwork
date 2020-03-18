import React from 'react';
import s from './ProfileInfo.module.css';
import { Spin } from 'antd';


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

    </div>
  )
}

export default ProfileInfo;