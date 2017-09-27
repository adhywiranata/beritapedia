import axios from 'axios';
import Config from 'react-native-config';

const apiKey = Config.NEWS_API_KEY;

export const fetchSources = () => (
  axios.get(`https://newsapi.org/v1/sources?language=en&apiKey=${apiKey}`)
);

export const fetchNews = sourceId => (
  axios.get(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${apiKey}`)
);
