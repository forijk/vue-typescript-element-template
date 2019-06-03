<template>
  <div class="sideClass">
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="true"
      :router="true"
      @select="handleSelect"
      @open="handleOpen"
      :default-active="currentPath"
      v-if="initMenu"
    >
      <el-submenu index="首页">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </template>
        <el-menu-item
          index="dashboard"
          class="inlineTitle"
        >Dashboard</el-menu-item>
      </el-submenu>

      <el-submenu index="11">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">导航一</span>
        </template>
        <el-submenu index="11-1">
          <span slot="title">选项11</span>
          <el-menu-item
            index="11-1-1"
            class="inlineTitle"
          >选项11-1-1</el-menu-item>
        </el-submenu>
        <el-submenu index="11-2">
          <span slot="title">选项12</span>
          <el-menu-item
            index="11-2-1"
            class="inlineTitle"
          >选项11-2-1</el-menu-item>
        </el-submenu>
        <el-submenu index="11-3">
          <span slot="title">选项13</span>
          <el-menu-item
            index="11-3-1"
            class="inlineTitle"
          >选项11-3-1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="12">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </template>
        <el-menu-item
          index="12-1"
          class="inlineTitle"
        >选项12-1</el-menu-item>
      </el-submenu>

      <el-submenu index="导航菜单">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">导航菜单</span>
        </template>
        <el-menu-item
          index="myClient"
          class="inlineTitle"
        >我的Client</el-menu-item>
        <el-menu-item
          index="serviceRegister"
          class="inlineTitle"
        >我的Service</el-menu-item>
        <el-menu-item
          index="myClass"
          class="inlineTitle"
        >我的分类</el-menu-item>
      </el-submenu>
      <el-submenu index="我的页面">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">我的页面</span>
        </template>
        <el-menu-item
          index="clientApplyAboutMe"
          class="inlineTitle"
        >我的Client申请</el-menu-item>
      </el-submenu>

      <div
        class="close"
        @click="handleCollapse"
      ><i :class="isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"></i></div>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bus from '@/common/Bus';
@Component({
  components: {},
})
export default class Home extends Vue {
  isCollapse: boolean = false

  currentPath: string = 'dashboard'

  initMenu: boolean = false

  mounted() {
    // 响应式显示当前菜单
    Bus.$on('changeCurrentPath', (content: string) => {
      if (this.currentPath !== content) {
        this.refreshSide(content);
        // 存储首页面包屑
        this.localStorage('dashboard');
      }
    });
    this.initMenu = true;
    // 刷新留在当前菜单
    if (window.location.pathname.match('apimanage')) {
      const path = window.location.pathname.split('/')[2];
      this.refreshSide(path);
      const localPath: string | null = window.localStorage.getItem('breadcrumb');
      // 重置面包屑为刷新之前
      this.$emit('changePath', path, (localPath as string).split(','));
    }
  }

  // 刷新留在当前菜单
  refreshSide(path: string) {
    this.initMenu = false;
    this.currentPath = path;
    this.$nextTick(() => {
      this.initMenu = true;
    });
    this.$router.push(path);
  }

  handleSelect(key: string, keyPath: []) {
    // 菜单激活回调: 更改面包屑路径
    this.$emit('changePath', key, keyPath);
    this.currentPath = key;
    if (key === 'dashboard') {
      this.localStorage('dashboard');
    } else {
      this.localStorage(keyPath.join(','));
    }
  }

  handleOpen(key: string, keyPath: []) {
    // sub-menu 展开的回调: 改面包屑路径
    this.$emit('changePath', key, keyPath);
    this.currentPath = key;
    if (key !== '首页') {
      this.localStorage(keyPath.join(','));
    }
  }

  localStorage(path: string) {
    const storage = window.localStorage;
    storage.setItem('breadcrumb', `首页,${path}`);
  }

  // 收缩展开侧边栏
  handleCollapse() {
    this.isCollapse = !this.isCollapse;
  }
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-menu--collapse {
  height: 100%;
}
.close {
  color: #409eff;
  position: absolute;
  left: 50%;
  padding: 20px;
  transform: translateX(-50%);
  bottom: 30px;
  cursor: pointer;
}
.inlineTitle {
  padding-left: 14px !important;
}
</style>
<style>
.sideClass .subTitle,
.sideClass .el-submenu__title {
  padding: 0 109px;
}
</style>
