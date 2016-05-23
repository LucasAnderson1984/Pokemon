import { FETCH_TYPE, SHOW_TYPE, QUERY_TYPE } from '../actions/types';

const INITIAL_STATE = { all: [], type: 0 };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TYPE:
      return { ...state, all: action.payload.data };
    case SHOW_TYPE:
      return { ...state, type: action.payload.data };
    case QUERY_TYPE:
      if (action.payload.data.id)
        return { ...state, all: [action.payload.data] };
      else
        return { ...state, all: action.payload.data };
  }

  return state;
}
