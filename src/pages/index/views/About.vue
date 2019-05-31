<template>
  <div>
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class About extends Vue {
  mounted() {
    this.$msg.success('aaaaa');
  }
}
</script>
