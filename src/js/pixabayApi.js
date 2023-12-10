import axios from 'axios';

const API_KEY = '2804306-3cea3fc1d1ba97847c9a627de';

const BASE_URL = 'https://pixabay.com/api/';

async function fetchImages(inputValue, page, perPage) {
  axios.defaults.params = {
    key: API_KEY,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page,
  };
  return await axios.get(BASE_URL).then(response => {
    if (response.status !== 200) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.data;
  });
}

export { fetchImages };
