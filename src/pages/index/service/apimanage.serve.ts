import * as apiName from './apiMap';
import axios from '@/common/axios';

import {
  responseSuccessfunc,
  responseErrorfunc,
  handelError,
} from '@/common/interpators';

// TODO
const axiosJson = (() => {
  let instance = null;
  if (!instance) {
    instance = axios.axios.create({
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      baseURL: `https://admin.${(window as any).__DEVELOP_ENV__ || 'dev.com'}/mbasebiz/apiauth`,
    });
    instance.interceptors.response.use((req) => {
      const returnData = responseSuccessfunc(req);
      const { data, error } = returnData;
      const errorMsg = (data && data.error) || error;
      if (errorMsg) {
        handelError(errorMsg);
        return;
      }
      return returnData;
    }, responseErrorfunc);
  }
  return instance;
})();

// 危险账号审核 =============================================================

// 获取Client申请列表
export function getClientApplyList(params?: any) {
  return axios.get((apiName as any).CLIENT_APPLYLIST, params);
}
