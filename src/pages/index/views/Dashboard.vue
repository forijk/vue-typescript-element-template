<template>
  <div>
    <h1>Vue-typescript-element-template</h1>
    <p>
      一款轻量级、简单易用、结构清晰的 Vue CLI3 + TypeScript + ElementUI
      开发的企业级后台模板。
    </p>
    <a
      href="https://github.com/forijk/vue-typescript-element-template"
      target="_blank"
      >Github 源码地址</a
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Dashboard extends Vue {}
</script>
