import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ profilePage, addPost, updatePostText }) => {

  const { newPostText, postsData } = profilePage;

  const posts = postsData.map((item) => {
    const { id, message, likesCount } = item;

    return <Post key={id} id={id} message={message} likesCount={likesCount} />
  });

  const onAddPost = () => {
    addPost();
  }

  const onUpdatePostText = (event) => {

    let textPost = event.target.value;
    updatePostText(textPost);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea value={newPostText}
            onChange={onUpdatePostText}
          />
        </div>
        <button onClick={onAddPost}>Add post</button>

      </div>
      <div className={s.posts}>

        {posts}
      </div>
    </div>
  );

}

export default MyPosts;