import  axios from 'axios';

const api = axios.create({
    baseURL:'https://run.mocky.io/v3/78a0c2d4-220f-474c-8095-ccae6004ad85'
})

export default api;