import Vue from 'vue';

Vue.mixin({
  created() {
    this.$msg = {
      success: (msg: string, title = '成功') => {
        this.$notify.success({
          title,
          message: msg,
          position: 'bottom-right',
        });
      },
      error: (msg: string, title = '错误') => {
        this.$notify.error({
          title,
          message: msg || '操作异常，请稍后重试',
          position: 'bottom-right',
        });
      },
      warn: (msg: string, title = '警告') => {
        this.$notify.warning({
          title,
          message: msg,
          position: 'bottom-right',
        });
      },
      info: (msg: string, title = '提示') => {
        this.$notify.info({
          title,
          message: msg,
          position: 'bottom-right',
        });
      },
    };
  },
});
