import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import { Spin, Row, Col } from 'antd';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import { withLazySuspense } from './hoc/withLazySuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Spin style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }} size='large' />
    }

    return (
      <div className='app-wrapper'>
        <Row>
          <Col>
            <HeaderContainer />
          </Col>
        </Row>

        <Row justify="center">
          <Col xl={3}>
            <Navbar />
          </Col>

          <Col xl={16}>
            <div className="app-wrapper-content">
              <Switch>

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

                <Route exact path='/'
                  render={() => <Redirect to='/profile' />} />

                <Route path='*' render={() =>
                  <div style={{
                    height: 190,
                    display: 'flex',
                    fontSize: 26,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }
                  }>Страница не найдена =(</div>} />

              </Switch>
            </div>
          </Col>
        </Row>
      </div >
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
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}
export default MainApp;  