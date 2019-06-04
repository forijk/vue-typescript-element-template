import { Notification } from 'element-ui';
import qs from 'qs';
import axios from 'axios';
import { throttleAdapter } from './axiosExtensions';

export const axiosOptions = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
  transformRequest: [
    (data = {}) => qs.stringify(data),
  ],
  withCredentials: true,
  // 请求超时时间
  timeout: 15000,
  // 接口路径
  baseURL: `https://admin.${(window as any).__DEVELOP_ENV__ || 'dev.com'}/mbasebiz/apiauth`,
  adapter: throttleAdapter(axios.defaults.adapter, {
    threshold: 500,
  }),
};

export const responseSuccessfunc = (response: any) => {
  if (response.status !== 200) {
    return Promise.reject(response);
  }
  // data返回error对象
  if (response.data.error) {
    handelError(response.data.error);
    return Promise.reject(response);
  }
  return response.data;
};

export const responseErrorfunc = (error: any) => {
  const { response } = error;
  if (response.status === 401) {
    if (response.data.auth_url) {
      window.location.href = `${response.data.auth_url}?from=${encodeURIComponent(
        window.location.href,
      )}`;
    }
    handelError(error);
    return;
  }
  if (
    error.config
    && error.config.hasOwnProperty('ignoreGlobalError')
    && error.config.ignoreGlobalError.length > 0
    && error.config.ignoreGlobalError.indexOf(response.error) > 0
  ) {
    return Promise.reject(error);
  }

  // TODO: mapping `error` to different error handler
  handelError(error);
  // return Promise.reject(error);
};

// 自定义错误处理逻辑
export function handelError(error: any) {
  const errorMsg = error.msg || error.message;
  Notification({
    title: '',
    position: 'bottom-right',
    showClose: true,
    message: errorMsg || '未知错误，请联系管理员',
    type: 'error',
  });
}
