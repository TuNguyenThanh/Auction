import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import registerReducers from './registerReducers';
import homeReducers from './homeReducers';
import forgotReducers from './forgotReducers';
import upProductReducers from './upProductReducers';
import checkcodeReducers from './checkcodeReducers';

export default combineReducers({
  Login: loginReducers,
  Register: registerReducers,
  Home: homeReducers,
  Forgot: forgotReducers,
  UpProduct: upProductReducers,
  Code: checkcodeReducers,
});
