
const apiUrl = process.env.REACT_APP_BACKEND_URL;

fetch(`${apiUrl}/endpoint`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
