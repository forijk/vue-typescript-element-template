import Vue from 'vue';
import { ElNotification } from 'element-ui/types/notification';

declare module 'vue/types/vue' {
  interface VueConstructor {
    $msg: ElNotification;
    $notify: ElNotification
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    [propName: string]: any;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $msg: ElNotification;
  }
}
