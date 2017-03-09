import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import registerReducers from './registerReducers';
import homeReducers from './homeReducers';
import forgotReducers from './forgotReducers';

export default combineReducers({
  Login: loginReducers,
  Register: registerReducers,
  Home: homeReducers,
  Forgot: forgotReducers,
});
