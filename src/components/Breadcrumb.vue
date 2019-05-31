<template>
  <el-breadcrumb
    separator-class="el-icon-arrow-right"
    class="breadcrumb"
  >
    <el-breadcrumb-item :to="{path: '/dashboard'}">
      <span
        @click="changeCurrentPath"
        style="cursor: pointer;"
      >首页</span>
    </el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="item in breadcrumb"
      :key="item"
      v-show="item !== '首页'"
    >{{ item }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import Bus from '@/common/Bus';
@Component({
  components: {},
})
export default class Breadcrumb extends Vue {
@Prop({ type: Array, default: () => ([]) }) breadcrumb!: []

@Watch('breadcrumb', { immediate: true, deep: true })
onBreadcrumbChanged(val: []) {
  if (val.length !== 0) {
    this.$nextTick(() => {
      console.log('breadcrumb', val);
    });
  }
}

changeCurrentPath() {
  // 返回首页 index page
  Bus.$emit('changeCurrentPath', 'dashboard');
  this.$emit('initPath');
}
}
</script>
<style lang="scss" scoped>
.breadcrumb {
  font-weight: 600;
  height: 24px;
  line-height: 24px;
  border-bottom: 1px dotted rgb(212, 212, 212);
}
</style>
