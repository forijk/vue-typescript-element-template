<template>
  <div class="clientApplyContent">
    <el-row>
      <el-col :span="4">
        <h3>编辑资源</h3>
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
          label="资源名称"
          prop="resourcesName"
        >
          <el-input v-model="ruleForm.resourcesName"></el-input>
        </el-form-item>
        <el-form-item
          label="函数名称"
          prop="funcName"
        >
          <el-input v-model="ruleForm.funcName"></el-input>
        </el-form-item>
        <el-form-item
          label="资源类名"
          prop="className"
        >
          <el-input v-model="ruleForm.className"></el-input>
        </el-form-item>
        <el-form-item
          label="资源uri地址"
          prop="resourcesUri"
        >
          <el-input v-model="ruleForm.resourcesUri"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >立即保存</el-button>
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
  components: {}
})
export default class ClientApply extends Vue {
  ruleForm: object = {
          resourcesName: '',
          funcName: '',
          className: '',
          resourcesUri: ''
        }
  rules: object = {
    resourcesName: [
      { required: true, message: '请输入资源名称', trigger: 'blur' }
    ],
    funcName: [
      { required: true, message: '请输入函数名称', trigger: 'blur' }
    ],
    className: [
      { required: true, message: '请输入资源类名', trigger: 'blur' }
    ],
    resourcesUri: [
      { required: true, message: '请输入资源uri地址', trigger: 'blur' }
    ]
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
