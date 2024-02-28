import { processServerResponse, baseUrl } from './utils.js';

export const register = ( email, password, name, avatar ) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name, avatar })
    })
    .then(processServerResponse)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
  };

export const authorize = ( email, password ) => {
    return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
    })
    .then(processServerResponse)
    .then((data) => {
        if (data.user) {
          localStorage.setItem('jwt', data.jwt);
    
          return data;
        }
      })
      .catch(err => console.log(err))
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(processServerResponse)
    .then(data => data)
  }