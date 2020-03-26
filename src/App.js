import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, HashRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import { Spin } from 'antd';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import { withLazySuspense } from './hoc/withLazySuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

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

          <Route path='/profile/:userId?' render={withLazySuspense(ProfileContainer)}
          />

          <Route path='/dialogs' render={withLazySuspense(DialogsContainer)}
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

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}
export default MainApp;  