<template>
  <div class="wrapper">
    <Header @initPath="initPath" />
    <el-container>
      <Side @changePath="changePath" />
      <el-main>
        <Breadcrumb
          :breadcrumb="keyPath"
          @initPath="initPath"
        />
        <slot title="Default main page!"></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Home extends Vue {
  key: string = ''

  keyPath: string[] = ['首页', 'dashboard']

  changePath(key: string, keyPath: []) {
    this.key = key;
    this.keyPath = keyPath;
  }

  initPath() {
    this.keyPath = ['首页', 'dashboard'];
  }
}
</script>
<style lang="scss" scoped>
.el-main {
  line-height: normal;
  margin: 20px;
  padding: 15px 20px 20px;
  text-align: left;
  flex-basis: 0;
  background-color: #fff;
  color: #333;
}
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
}
</style>
