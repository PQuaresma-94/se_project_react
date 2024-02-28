import { processServerResponse, baseUrl } from './utils.js' 

export const getItems = () => {
    return fetch(`${baseUrl}/items`)
    .then(processServerResponse);
};

export const postItem = (item) => {
    return fetch(`${baseUrl}/items`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(processServerResponse);
};

export const deleteItem = (id) => {
    return fetch(`${baseUrl}/items/${id}`, {
        method: 'DELETE',
    })
    .then(processServerResponse);
};
