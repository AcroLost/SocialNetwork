import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';


import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import { Spin } from 'antd';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Spin size='large' />
    }

    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path='/profile/:userId?' render={() =>
            <ProfileContainer />}
          />

          <Route path='/dialogs' render={() =>
            <DialogsContainer />}
          />

          <Route path='/users' render={() =>
            <UsersContainer />}
          />

          <Route path='/login' render={() =>
            <Login />}
          />

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);