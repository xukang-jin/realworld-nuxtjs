import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
});

export default ({ store }) => {
  //请求拦截器
  request.interceptors.request.use((config) => {
    const { user } = store.state;

    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config;
  })
}


//响应拦截器
