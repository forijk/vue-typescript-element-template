<template>
  <div class="clientApplyContent">
    <el-row>
      <el-col :span="4">
        <h3>创建分类</h3>
      </el-col>
    </el-row>
    <el-card class="tableWrap">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="分类名称"
          prop="className"
        >
          <el-input
            clearable=""
            v-model="ruleForm.className"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Form as ElForm } from 'element-ui';
@Component({
  components: {},
})
export default class ClientApply extends Vue {
  ruleForm: object = {
    className: '',
  }

  rules: object = {
    className: [
      { required: true, message: '请输入分类名称', trigger: 'blur' },
    ],
  }

  submitForm(formName: string) {
    const ref = (this.$refs[formName] as ElForm);
    ref.validate((valid: boolean) => {
      if (valid) {
        console.log(this.ruleForm);
      } else {
        return false;
      }
    });
  }

  resetForm(formName: string) {
    const ref = (this.$refs[formName] as ElForm);
    ref.resetFields();
  }
}
</script>
<style lang="scss" scoped>
.clientApplyContent {
  margin-top: 20px;
  .tableWrap {
    margin-top: 20px;
    .pagination {
      text-align: center;
      margin-top: 20px;
    }
  }
  .el-input {
    width: 320px;
  }
  .el-textarea {
    width: 320px;
  }
}
</style>
