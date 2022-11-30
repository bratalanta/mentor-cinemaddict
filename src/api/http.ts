import axios from 'axios';
import { API } from '../const';

const http = axios.create({
  baseURL: API,
  headers: { Authorization: `Basic asklduyer` },
});

export default http;
