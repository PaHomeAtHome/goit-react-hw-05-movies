import axios from 'axios';

const API_KEY = `1b50ba0e0b99203af5e26bdcee6d2298`;
const URL = `https://api.themoviedb.org/3/trending/all/day`;

axios.defaults.baseURL = URL;
export default async function fetchResult() {
  const response = await axios
    .get(URL, {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data.results;
}
