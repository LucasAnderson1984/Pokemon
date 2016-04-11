import { combineReducers } from 'redux';
import TypesReducer from './reducer_types';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  types: TypesReducer,
  form: formReducer
});

export default rootReducer;
