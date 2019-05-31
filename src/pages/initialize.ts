/**
 * @file vue 项目初使化
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/common/common.scss';
import inject from '@/plugins/inject';
import '@/plugins/notify';

Vue.use(ElementUI);
Vue.use(inject);

// js 热更新
if ((module as any).hot) {
  (module as any).hot.accept();
}
