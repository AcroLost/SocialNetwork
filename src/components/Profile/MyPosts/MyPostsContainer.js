import MyPosts from './MyPosts';

import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;