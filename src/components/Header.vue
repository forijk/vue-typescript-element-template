<template>
  <el-header>
    <div class="header_left">
      <h1><a href="/index/">Vue-typescript-element-template 企业级后台模板</a></h1>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link :to="{path: '/dashboard'}">首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-submenu index="2-2">
            <template slot="title">选项2</template>
            <el-menu-item index="2-2-1">选项1</el-menu-item>
            <el-menu-item index="2-2-2">选项2</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </div>
    <el-dropdown class="login">
      <span class="el-dropdown-link">
        您好, 先生
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <a href="#"><i class="el-icon-error"></i> 退出登陆</a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bus from '@/common/Bus';
@Component({
  components: {},
})
export default class Home extends Vue {
  activeIndex: string = '1';

  handleSelect(key: string, keyPath: object) {
    // 返回首页 dashboard
    if (key === '1') {
      Bus.$emit('changeCurrentPath', 'dashboard');
      this.$emit('initPath');
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  width: 42px;
  height: 42px;
  background-image: url(../assets/logo.png);
  line-height: 200px;
  overflow: hidden;
  background-size: cover;
  margin-right: 18px;
  margin-left: 15px;
}
h1 a {
  display: block;
  width: 100%;
  height: 100%;
}
.el-header {
  text-align: center;
  line-height: 60px;
}
.el-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  background: white;
}
.header_left {
  display: flex;
  align-items: center;
}
</style>
