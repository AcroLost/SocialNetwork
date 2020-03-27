import React, { useState } from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Spin } from 'antd';


const Profile = ({ saveProfile, savePhoto, profile, updateUserStatus, status, isOwner }) => {

  const [editMode, setEditMode] = useState(false);

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
    return <Spin style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 300
    }} size="large" />
  }


  return (
    <div>
      <ProfileInfo savePhoto={savePhoto}
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        saveProfile={saveProfile}
        onEditMode={onEditMode}
        onSubmit={onSubmit}
        editMode={editMode} />

      {!editMode &&
        <MyPostsContainer />
      }
    </div>
  )
}

export default Profile;