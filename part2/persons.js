import axios from 'axios'

const baseURL = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseURL)
};

const create = (newInfo) => {
  return axios.post(baseURL, newInfo)
};


export default {
  getAll,
  create
}
