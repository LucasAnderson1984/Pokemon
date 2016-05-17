import { FETCH_POKEDEX, SHOW_POKEDEX } from '../actions/pokedexes';

const INITIAL_STATE = { all: [], pokedex: 0 };

export default function(state = INITIAL_STATE, action) {
  switch (action.pokedex) {
    case FETCH_POKEDEX:
      return { ...state, all: action.payload.data };
    case SHOW_POKEDEX:
      return { ...state, pokedex: action.payload.data };
  }

  return state;
}
