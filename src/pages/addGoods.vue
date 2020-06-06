<template>
  <div class="container">
    <el-card class="box-card">
      <el-row class="category_select">
        <el-form :model="categoryForm" ref="categoryForm" label-width="110px" class="form">
          <el-form-item label="食品种类">
            <el-select v-model="categoryForm.categorySelect" :placeholder="selectValue.label" style="width:100%;">
              <el-option v-for="item in categoryForm.categoryList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-row>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="添加食品种类" name="2" style="text-align: center;padding-left: 43px;">
          <el-form :model="categoryForm" ref="categoryForm" label-width="110px" class="form">
            <el-form-item label="食品种类" prop="name">
              <el-input v-model="categoryForm.name"></el-input>
            </el-form-item>
            <el-form-item label="种类描述" prop="description">
              <el-input v-model="categoryForm.description"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitcategoryForm('categoryForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <header style="margin-top:30px;text-align: center;">添加食品</header>
    <el-card class="box-card">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="食品名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="食品活动" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="食品详情" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="上传食品图片">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="食品特点" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择食品特点">
            <el-option label="特点一" value="shanghai"></el-option>
            <el-option label="特点二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="食品规格" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="包装费" prop="float_delivery_fee">
          <el-input-number v-model="float_delivery_fee" :min="0" :max="20"></el-input-number>
        </el-form-item>
        <el-form-item label="价格" prop="float_minimum_order_amount">
          <el-input-number v-model="float_minimum_order_amount" :min="0" :max="100"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        float_delivery_fee:1,
        float_minimum_order_amount:5,
        imageUrl: '',
        categoryForm: {
          categorySelect: '',
          categoryList: []
        },
        selectValue: {
          label: "请选择"
        },
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
          date1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          date2: [{
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }],
          type: [{
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }],
          resource: [{
            required: true,
            message: '请选择活动资源',
            trigger: 'change'
          }],
          desc: [{
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped="scoped">
  .container {
    margin: 30px;
  }

  .container>>>.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

    .container>>>.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

    .container>>>.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

    .container>>>.avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
