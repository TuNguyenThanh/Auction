import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginApp from './LoginApp';
import RegisterApp from './RegisterApp';
import HomeApp from './HomeApp';
import ForgotApp from './ForgotApp';
import DetailApp from './DetailApp';
import UpProductApp from './UpProductApp';
import CheckCodeApp from './CheckCodeApp';

const RouterComponent = () => (
  <Router>
    <Scene key="Login" direction="vertical" hideNavBar >
      <Scene key="loginForm" component={LoginApp} />
      <Scene key="registerForm" component={RegisterApp} direction="vertical" />
      <Scene key="forgotForm" component={ForgotApp} />
      <Scene key="checkCode" component={CheckCodeApp} />
    </Scene>
    <Scene key="Main" direction="vertical" >
      <Scene
        key="homeApp"
        component={HomeApp}
        hideNavBar
      />
      <Scene
        key="detail"
        titleStyle={{ color: '#646464' }}
        component={DetailApp}
        navigationBarStyle={{ borderBottomColor: '#F8F8F8', backgroundColor: '#F8F8F8' }}
        leftButtonIconStyle={{ tintColor: '#EF5E92' }}
        hideNavBar={false}
      />
      <Scene
        initial
        key="upProduct"
        component={UpProductApp}
        title="Đăng tin"
        titleStyle={{ color: '#EF5E92', fontWeight: 'bold' }}
        navigationBarStyle={{ borderBottomColor: '#F8F8F8', backgroundColor: '#F8F8F8' }}
        leftButtonIconStyle={{ tintColor: '#EF5E92' }}
        hideNavBar={false}
      />
    </Scene>
  </Router>
);

export default RouterComponent;
