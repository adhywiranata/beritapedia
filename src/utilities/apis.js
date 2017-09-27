import axios from 'axios';
import Config from 'react-native-config';

const apiKey = Config.NEWS_API_KEY;
// const apiKey = '781c0d54f287466d8323a7955b9ce31a';

export const fetchSources = () => (
  axios.get(`https://newsapi.org/v1/sources?language=en&apiKey=${apiKey}`)
);

export const fetchNews = sourceId => (
  axios.get(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${apiKey}`)
);
