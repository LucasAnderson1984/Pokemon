import axios from 'axios';

const ROOT_URL = 'http://localhost:3000'
const url = `${ROOT_URL}/types`

export const FETCH_TYPE = 'FETCH_TYPE';
export const SHOW_TYPE = 'SHOW_TYPE';
export const CREATE_TYPE = 'CREATE_TYPE';
export const UPDATE_TYPE = 'UPDATE_TYPE';
export const DESTROY_TYPE = 'DESTROY_TYPE';
export const QUERY_TYPE = 'QUERY_TYPE';

export function fetchTypes() {
  const request = axios.get(url);

  return {
    type: FETCH_TYPE,
    payload: request
  };
}

export function showType(id) {
  const request = axios.get(`${url}/${id}`);

  return {
    type: SHOW_TYPE,
    payload: request
  };
}

export function createType(props) {
  const request = axios.post(url, props);

  return {
    type: CREATE_TYPE,
    payload: request
  };
}

export function updateType(id, props) {
  const request = axios.patch(`${url}/${id}`, props);

  return {
    type: UPDATE_TYPE,
    payload: request
  };
}

export function destroyType(id) {
  const request = axios.delete(`${url}/${id}`);

  return {
    type: DESTROY_TYPE,
    payload: request
  };
}

export function queryType(param) {
  const request = axios.get(`${url}?param=${param}`);

  return {
    type: QUERY_TYPE,
    payload: request
  };
}
