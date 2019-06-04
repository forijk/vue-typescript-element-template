import axios from 'axios';
import {
  axiosOptions,
  responseSuccessfunc,
  responseErrorfunc,
} from './interpators';

// 创建axios实例
const instance = axios.create(axiosOptions as any);

// respone拦截器
instance.interceptors.response.use(responseSuccessfunc, responseErrorfunc);

export default {
  post(url: string, data?: any) {
    return instance({
      url,
      method: 'post',
      data,
    });
  },
  get(url: string, params?: any) {
    return instance({
      url,
      method: 'get',
      params,
    });
  },
  instance,
  axios,
};
