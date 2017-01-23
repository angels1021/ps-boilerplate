import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const base = getBaseUrl();

function onSuccess(response) {
  return response.json();
}

function onError(ex) {
  console.log('fetch error', ex);  // eslint-disable-line no-console
}

function get(url) {
  return fetch(base + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(base + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}
