export function getUsersFromPage(page=1) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users?_page=${page}`;
    
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }