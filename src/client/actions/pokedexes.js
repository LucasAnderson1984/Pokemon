import axios from 'axios';

const ROOT_URL = 'http://localhost:3000'
const url = `${ROOT_URL}/pokedexes`

export const FETCH_POKEDEX = 'FETCH_POKEDEX';
export const SHOW_POKEDEX = 'SHOW_POKEDEX';
export const CREATE_POKEDEX = 'CREATE_POKEDEX';
export const UPDATE_POKEDEX = 'UPDATE_POKEDEX';
export const DESTROY_POKEDEX = 'DESTROY_POKEDEX';
export const QUERY_POKEDEX = 'QUERY_POKEDEX';

export function fetchPokedexes() {
  const request = axios.get(url);

  return {
    type: FETCH_POKEDEX,
    payload: request
  };
}

export function showPokedex(id) {
  const request = axios.get(`${url}/${id}`);

  return {
    type: SHOW_POKEDEX,
    payload: request
  };
}

export function createPokedex(props) {
  const request = axios.post(url, props);

  return {
    type: CREATE_POKEDEX,
    payload: request
  };
}

export function updatePokedex(id, props) {
  const request = axios.patch(`${url}/${id}`, props);

  return {
    type: UPDATE_POKEDEX,
    payload: request
  };
}

export function destroyPokedex(id) {
  const request = axios.delete(`${url}/${id}`);

  return {
    type: DESTROY_POKEDEX,
    payload: request
  };
}

export function queryPokedex(param) {
  const request = axios.get(`${url}?param=${param}`);

  return {
    type: QUERY_POKEDEX,
    payload: request
  };
}
