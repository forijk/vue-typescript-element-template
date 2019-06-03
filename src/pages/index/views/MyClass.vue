<template>
  <div class="MyClientContent">
    <el-row>
      <el-col :span="4">
        <h3>我的分类</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :offset="20"
        :span="4"
      >
        <el-button
          type="primary"
          @click="handleJumpApply"
        >创建分类</el-button>
      </el-col>
    </el-row>
    <el-card class="tableWrap">
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
      >
        <el-table-column
          label="ID"
          prop='id'
        ></el-table-column>
        <el-table-column
          label="分类名称"
          prop="className"
        ></el-table-column>
        <el-table-column
          label="创建时间"
          width="180"
        >
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.ctime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="180"
        >
          <template>
            <el-tag
              size="medium"
              type="info"
            >待审核</el-tag>
            <el-tag
              size="medium"
              type="success"
            >通过</el-tag>
            <el-tag
              size="medium"
              type="danger"
            >拒绝</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleEdit(scope.$index, scope.row)"
            >上线 or 下线</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleEditSource(scope.$index, scope.row)"
            >编辑资源</el-button>
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
  components: {}
})
export default class MyClient extends Vue {
  currentPage: number = 1
  total: number = 100
  pageSize: number = 20
  tableData = [
    {
      id: 23131132,
      status: 0,
      className: '分类名称',
      ctime: '2016-05-02',
    },
    {
      id: 23131132,
      status: 0,
      className: '分类名称',
      ctime: '2016-05-02',
    },
    {
      id: 23131132,
      status: 0,
      className: '分类名称',
      ctime: '2016-05-02',
    }
  ]
  mounted() {
    this.$msg.success('aaaaa');
  }
  handleEdit(index: number, row: object) {
    console.log(index, row);
  }
  handleSizeChange(val: number) {
    console.log(`每页 ${val} 条`);
  }
  handleCurrentChange(val: number) {
    console.log(`当前页: ${val}`);
  }
  handleJumpApply() {
    this.$router.push('/createClass');
  }
  handleEditSource(index: number, row: object) {
    console.log(index, row);
    this.$router.push('/editSource');
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
