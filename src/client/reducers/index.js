import { combineReducers } from 'redux';
import TypesReducer from './reducer_types';
import PokedexesReducer from './reducer_pokedexes';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  types: TypesReducer,
  pokedexes: PokedexesReducer,
  form: formReducer
});

export default rootReducer;
