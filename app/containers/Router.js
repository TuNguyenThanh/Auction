import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginApp from './LoginApp';
import RegisterApp from './RegisterApp';
import HomeApp from './HomeApp';
import ForgotForm from '../components/ForgotForm';

const RouterComponent = () => (
  <Router>
    <Scene key="Login" direction="vertical" hideNavBar >
      <Scene key="loginForm" component={LoginApp} />
      <Scene key="registerForm" component={RegisterApp} direction="vertical" />
      <Scene key="forgotForm" component={ForgotForm} />
    </Scene>
    <Scene key="Main" direction="vertical"  >
      <Scene key="homeApp" component={HomeApp} title="HOME" />
    </Scene>
  </Router>
);
//initial
export default RouterComponent;
