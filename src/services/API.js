import axios from 'axios';

const API_KEY = `1b50ba0e0b99203af5e26bdcee6d2298`;
const URL_TRENDING = `https://api.themoviedb.org/3/trending/movie/day`;
const URL_ID = `https://api.themoviedb.org/3/movie/`;

export default async function fetchResult() {
  const response = await axios
    .get(URL_TRENDING, {
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

export async function getMovieInfo(id) {
  const response = await axios
    .get(URL_ID + id, {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data;
}

export async function getCast(id) {
  const response = await axios
    .get(URL_ID + id + `/credits`, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data.cast;
}

export async function getReviews(id) {
  const response = await axios
    .get(URL_ID + id + `/Reviews`, {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  console.log(response.data);
  return response.data;
}
