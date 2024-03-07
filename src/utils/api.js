import { processServerResponse, baseUrl } from './utils.js' 

// User Requests

export const updateUserProfile = (userData) => {
    const token= localStorage.getItem("jwt")
    return fetch(`${baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(userData)
    })
    .then(processServerResponse)
    .then((data) => {
        const currentUserData = {
            currentUser: data.updateUser
        }
        return currentUserData;
      })
}

// Items Requests

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
