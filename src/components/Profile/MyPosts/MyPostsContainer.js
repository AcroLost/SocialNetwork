import React from 'react';
import MyPosts from './MyPosts';

import { addPostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


const MyPostsContainer = (props) => {

  return (
    <MyPosts profilePage={props.profilePage}
      isOwner={props.isOwner}
      addPost={props.addPost} />
  );
}


const mapStateToProps = (state) => {

  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
