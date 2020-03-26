import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Spin } from 'antd';


const Profile = ({ saveProfile, savePhoto, profile, updateUserStatus, status, isOwner }) => {

  if (!profile) {
    return <Spin size="large" />
  }

  return (
    <div>
      <ProfileInfo savePhoto={savePhoto}
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        saveProfile={saveProfile} />

      <MyPostsContainer />
    </div>
  )
}

export default Profile;