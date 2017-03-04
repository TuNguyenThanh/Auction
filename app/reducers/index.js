import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import registerReducers from './registerReducers';
import homeReducers from './homeReducers';

export default combineReducers({
  Login: loginReducers,
  Register: registerReducers,
  Home: homeReducers,
});
