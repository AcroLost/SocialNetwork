import React from 'react';
import s from './Post.module.css';

import userPhoto from '../../../../image/ava.jpg';

const Post = ({ message, likesCount, profile }) => {

  return (
    <div className={s.item}>
      <img src={profile ? profile.photos.small : userPhoto} alt='ava' />
      {message}
      <div>
        <span>like: {likesCount}</span>
      </div>
    </div>
  )
}

export default Post;