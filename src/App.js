import './App.css';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Navbar/NavContainer';
import LoginPage from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp, initialized } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { BrowserRouter } from "react-router-dom";
import { withSuspense } from './hoc/withSuspense';


const DialogsContainer =React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer =React.lazy(() => import ('./components/Profile/ProfileContainer'));

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }


  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }


    return (


      <div className='app-wrapper'>

        <HeaderContainer />

        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={withSuspense(DialogsContainer) } />

          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />

          <Route path='/users' render={() => <UsersContainer />} />

          <Route path='/login' render={() => <LoginPage />} />

        </div>

      </div>

    );

  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


const AppContainer=  compose(
withRouter,
connect(mapStateToProps, { initializeApp }))(App);

const WebSovellusJSApp = (props) =>{
  return <BrowserRouter>
  <Provider store={store}>
    <AppContainer />
  </Provider>
</BrowserRouter>
}

export default WebSovellusJSApp;