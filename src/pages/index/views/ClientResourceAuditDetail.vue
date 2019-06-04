<template>
  <div class="serviceDetail">
    <el-row>
      <el-col :span="4">
        <h3>服务详情</h3>
      </el-col>
    </el-row>
    <el-card>
      <el-row
        v-for="i in 3"
        :key="i"
        class="content"
      >
        <div>
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox
              class="checkbox"
              v-for="city in cities"
              :label="city"
              :key="city"
            >{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-row>
      <div class="submit">
        <el-button type="primary">通过</el-button>
        <el-button type="primary">拒绝</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const cityOptions = ['上海', '北京', '广州', '深圳'];
@Component({
  components: {},
})
export default class ServiceDetail extends Vue {
  checkAll = false

  checkedCities = ['上海', '北京']

  cities = cityOptions

  isIndeterminate = true

  handleCheckAllChange(val: string) {
    this.checkedCities = val ? cityOptions : [];
    this.isIndeterminate = false;
  }

  handleCheckedCitiesChange(value: []) {
    const checkedCount = value.length;
    this.checkAll = checkedCount === this.cities.length;
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
  }
}
</script>
<style lang="scss" scoped>
.serviceDetail {
  .el-checkbox-group {
    margin-left: 50px;
  }
  .content {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px dotted rgb(233, 229, 229);
  }
  .checkbox {
    margin-bottom: 10px;
  }
  .submit {
    text-align: right;
  }
}
</style>
