import { isEmptyObject } from '@/utils';
// base 里都是基础模块，每个项目都要用到的模块，比如顶导航/左导航
const baseModules = require.context('@/components', false, /\.vue$/);

interface Options {
  components: string[];
  [index: string]: any;
}

export default {
  install: (Vue: any, options: Options = { components: [] }) => {
    const { components } = options;

    baseModules.keys().forEach((v: string) => {
      const key = v.replace(/(\.\/|\.vue)/g, '');
      if (isEmptyObject(options.components) || components.indexOf(key) > -1) {
        Vue.component(key, baseModules(v).default);
      }
    });
  },
};
