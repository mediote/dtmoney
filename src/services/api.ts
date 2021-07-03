import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://vigilant-kepler-983ab5.netlify.app/api',
});
