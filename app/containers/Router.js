import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginApp from './LoginApp';
import RegisterApp from './RegisterApp';
import HomeApp from './HomeApp';
import ForgotApp from './ForgotApp';
import Detail from '../components/Detail';
import UpProduct from '../components/UpProduct';

const RouterComponent = () => (
  <Router>
    <Scene key="Login" direction="vertical" hideNavBar initial>
      <Scene key="loginForm" component={LoginApp} />
      <Scene key="registerForm" component={RegisterApp} direction="vertical" />
      <Scene key="forgotForm" component={ForgotApp} />
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
        component={Detail}
        navigationBarStyle={{ borderBottomColor: '#F8F8F8', backgroundColor: '#F8F8F8' }}
        leftButtonIconStyle={{ tintColor: '#EF5E92' }}
        hideNavBar={false}
      />
      <Scene key="upProduct" component={UpProduct} title="Đăng tin" hideNavBar={false} />
    </Scene>
  </Router>
);

//initial
// leftButtonImage={require('../components/images/menu.png')}
// onLeft={() => alert('left')}
// rightButtonImage={require('../components/images/edit.png')}
// onRight={() => alert('left')}


export default RouterComponent;
