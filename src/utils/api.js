const baseUrl = 'http://localhost:3001';

export const getItems = () => {
    const clothes = fetch(`${baseUrl}/items`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else { 
            Promise.reject(`Error: ${res.status}`);
          }
        });
        return clothes;
};

export const postItem = ({id, name, link, weatherType}) => {
    fetch(`${baseUrl}/items`, {
        method: 'POST',
        body: JSON.stringify({
            _id: id,
            name: name,
            link: link,
            type: weatherType
        })
    })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else { 
            Promise.reject(`Error: ${res.status}`);
          }
        });
};

export const deleteItem = ({id}) => {
    fetch(`${baseUrl}/items/${id}`, {
        method: 'DELETE',
    })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else { 
            Promise.reject(`Error: ${res.status}`);
          }
        });
};