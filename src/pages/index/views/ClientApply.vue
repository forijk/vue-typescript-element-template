<template>
  <div class="clientApplyContent">
    <el-row>
      <el-col :span="4">
        <h3>Client 申请</h3>
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
          label="申请人"
          prop="applyUserName"
        >
          <el-input
            v-model="ruleForm.applyUserName"
            placeholder="需自动填写"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="业务线"
          prop="channelName"
        >
          <el-input
            v-model="ruleForm.channelName"
            placeholder="需自动填写"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="申请说明"
          prop="applyInfo"
        >
          <el-input
            rows="6"
            type="textarea"
            v-model="ruleForm.applyInfo"
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
    applyUserName: '',
    channelName: '',
    applyInfo: '',
  }

  rules: object = {
    applyUserName: [
      { required: true, message: '请输入申请人名称', trigger: 'blur' },
    ],
    channelName: [
      { required: true, message: '请输入业务线名称', trigger: 'blur' },
    ],
    applyInfo: [
      { required: true, message: '请填写申请说明', trigger: 'blur' },
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
