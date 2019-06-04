<template>
  <div class="MyClientContent">
    <el-row>
      <el-col :span="4">
        <h3>Service 列表</h3>
      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col
        :offset="20"
        :span="4"
      >
        <el-button
          type="primary"
          @click="handleJumpApply"
        >Client 申请</el-button>
      </el-col>
    </el-row> -->
    <el-card class="tableWrap">
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
      >
        <el-table-column
          label="服务ID"
          prop='id'
        ></el-table-column>
        <el-table-column
          label="服务名称"
          prop="serviceName"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="handleJumpApply(scope.$index, scope.row)"
            >{{ scope.row.serviceName }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class MyClient extends Vue {
  currentPage: number = 1

  total: number = 100

  pageSize: number = 20

  tableData = [
    {
      id: 23131132,
      serviceName: '服务名称',
    },
    {
      id: 23131132,
      serviceName: '服务名称',
    },
    {
      id: 23131132,
      serviceName: '服务名称',
    },
  ]

  mounted() {
    this.$msg.success('aaaaa');
  }

  handleJumpApply(index: number, row: object) {
    console.log(index, row);
    this.$router.push('/serviceDetail');
  }

  handleSizeChange(val: number) {
    console.log(`每页 ${val} 条`);
  }

  handleCurrentChange(val: number) {
    console.log(`当前页: ${val}`);
  }
}
</script>
<style lang="scss" scoped>
.MyClientContent {
  margin-top: 20px;
  .tableWrap {
    margin-top: 20px;
    .pagination {
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>
