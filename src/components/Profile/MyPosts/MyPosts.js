import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm';

const MyPosts = React.memo(({ profilePage, addPost, isOwner }) => {

  const { postsData, profile } = profilePage;

  const posts = postsData.map((item) => {
    const { id, message, likesCount } = item;

    return <Post key={id}
      message={message}
      likesCount={likesCount}
      profile={profile} />
  });

  const onAddPost = (values) => {
    addPost(values.postText);
  }

  return (
    <div className={s.postsBlock}>
      <h3 style={{ fontSize: 22 }}>Мои записи</h3>

      <AddNewPostForm onSubmit={onAddPost} isOwner={isOwner} />

      <div className={s.posts}>
        {posts}
      </div>
    </div>
  );
});

export default MyPosts;

