
import LRUCache from 'lru-cache';
import buildURL from 'axios/lib/helpers/buildURL';

/**
 *
 *
 * @export
 * @param {*} adapter  axios adapter https://github.com/axios/axios/blob/master/lib/adapters/README.md
 * @param {Object} options 自定义 {threshold: 抖动时长, cache: 缓存请求, methods:[]}
 * @returns
 */
export function throttleAdapter(adapter: any, {
  threshold = 500,
  cache = new LRUCache({ max: 10 }),
  methods = ['get'],
} = {}) {
  // 初始化
  // const {
  //   threshold = 500,
  //   cache = new LRUCache({ max: 10 }),
  //   methods = ['get']
  // } = options;

  const requestCachedRecord = (index: any, config: object) => {
    // 将每次的请求结果缓存
    const responsePromise = (async () => {
      try {
        const response = await adapter(config);
        cache.set(index, {
          timestamp: Date.now(),
          value: Promise.resolve(response),
        });

        return response;
      } catch (err) {
        console.log('err: ', err);
        cache.del(index);
        throw err;
      }
    })();
    // 设置缓存
    cache.set(index, {
      timestamp: Date.now(),
      value: responsePromise,
    });

    return responsePromise;
  };
  return (config: any) => {
    const {
      url, method, params, paramsSerializer,
    } = config;
    const index = buildSortedURL(url, params, paramsSerializer);

    const now = Date.now();
    const cachedRecord: any = cache.get(index) || { timestamp: now };
    // 检验是否需要进行抖动处理
    if (methods.indexOf(method) > -1) {
      if (now - cachedRecord.timestamp <= threshold) {
        const responsePromise = cachedRecord.value;
        if (responsePromise) {
          if (process.env.LOGGER_LEVEL === 'info') {
            // eslint-disable-next-line no-console
            console.info(`request cached ==========>: ${index}`);
          }
          return responsePromise;
        }
      }
      return requestCachedRecord(index, config);
    }
    return adapter(config);
  };
}

// 参数排序后拼接url
function buildSortedURL(...args: any[]) {
  const builtURL = buildURL(...args);
  const [urlPath, queryString] = builtURL.split('?');
  if (queryString) {
    const paramsPair = queryString.split('&');
    return `${urlPath}?${paramsPair.sort().join('&')}`;
  }

  return builtURL;
}
