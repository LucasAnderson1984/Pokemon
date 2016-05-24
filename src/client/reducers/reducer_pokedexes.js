import { FETCH_POKEDEX, SHOW_POKEDEX, QUERY_POKEDEX } from '../actions/pokedexes';

const INITIAL_STATE = { all: [], pokedex: 0 };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POKEDEX:
      return { ...state, all: action.payload.data };
    case SHOW_POKEDEX:
      return { ...state, pokedex: action.payload.data };
    case QUERY_POKEDEX:
      if (action.payload.data.id)
        return { ...state, all: [action.payload.data] };
      else
        return { ...state, all: action.payload.data };
  }

  return state;
}
