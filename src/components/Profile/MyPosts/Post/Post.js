import React from 'react';
import s from './Post.module.css';

import userPhoto from '../../../../image/ava.jpg';

const Post = ({ message, likesCount, profile }) => {

  return (
    <div className={s.item}>
      <img src={profile.photos.small || userPhoto} alt='ava' />
      <span style={{ fontSize: 15, marginLeft: 10 }}>{message}</span>
      <div>
        <span>like: {likesCount}</span>
      </div>
    </div>
  )
}

export default Post;