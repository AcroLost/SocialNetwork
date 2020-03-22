import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = ({ profilePage, addPost }) => {

  const { postsData } = profilePage;

  const posts = postsData.map((item) => {
    const { id, message, likesCount } = item;

    return <Post key={id} message={message} likesCount={likesCount} />
  });

  const onAddPost = (values) => {
    addPost(values.postText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <AddNewPostForm onSubmit={onAddPost} />

      <div className={s.posts}>
        {posts}
      </div>
    </div>
  );
}

export default MyPosts;

let AddNewPostForm = (props) => {
  return (

    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='postText' component='textarea' />
      </div>

      <button>Добавить пост</button>
    </form>
  );
}

AddNewPostForm = reduxForm({ form: 'addNewPostForm' })(AddNewPostForm);