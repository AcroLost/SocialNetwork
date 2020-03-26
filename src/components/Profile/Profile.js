import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = ({ savePhoto, profile, updateUserStatus, status, isOwner }) => {

  return (
    <div>
      <ProfileInfo savePhoto={savePhoto}
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus} />

      <MyPostsContainer />
    </div>
  )
}

export default Profile;