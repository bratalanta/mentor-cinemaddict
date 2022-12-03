import axios from 'axios';

const API = 'https://17.ecmascript.pages.academy/cinemaddict';

const http = axios.create({
  baseURL: API,
  headers: { Authorization: 'Basic asklduyer' },
});

export default http;
