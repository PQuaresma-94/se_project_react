const baseUrl = 'http://localhost:3001';

export const getItems = () => {
    return fetch(`${baseUrl}/items`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Error: ${res.status}`);
            }
        });
};

export const postItem = (item) => {
    return fetch(`${baseUrl}/items`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
      }
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Error: ${res.status}`);
            }
        });
};

export const deleteItem = (id) => {
    return fetch(`${baseUrl}/items/${id}`, {
        method: 'DELETE',
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Error: ${res.status}`);
            }
        });
};
