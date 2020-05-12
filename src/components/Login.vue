<template>
  <div class="body">
    <transition name="login">
      <div class="container" v-if="show">
        <h3>登录</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名称" prop="username">
            <el-input v-model="ruleForm.username" class="m-r-100" placeholder="测试用户名称:KG"></el-input>
          </el-form-item>
          <el-form-item label="登录密码" prop="password">
            <el-input v-model="ruleForm.password" class="m-r-100" placeholder="测试用户密码:123456"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" class="m-r-100">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    data() {
      return {
        show: false,
        ruleForm: {
          username: '',
          password:''
        },
        rules: {
          username: [{
              required: true,
              message: '请输入用户名称',
              trigger: 'blur'
            }
          ],
          password:[{
            required:true,
            message:'请输入登录密码',
            trigger: 'blur'
          },{
            min:6,
            message:'密码长度最少6位',
            trigger: 'blur'
            }
          ]
        }
      }
    },
    computed:{
      ...mapState(['password','username'])
    },
    mounted() {
      console.log(this.username,this.password)
      this.initLogin();
    },
    methods: {
      initLogin() {
        this.show = true;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid&&this.ruleForm.username===this.username&&this.ruleForm.password===this.password) {
            //对用户名和密码进行对比
            console.log(this.ruleForm);
            this.$message({
                type: 'success',
                message: '登录成功'
            });
            this.$router.push('HomePage');
          } else {
            this.$message({
                type: 'fail',
                message: '用户名称或密码错误'
            });
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped="scoped">
  .body {
    background: #2C3E50;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    content: '';
  }

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    margin-top: -125px;
    margin-left: -250px;
    width: 495px;
    height: 250px;
    background: #fff;
    border-radius: 8px;
    padding-right: 25px;
  }

  .login-enter-active,
  .login-leave-active {
    transition: all 2s ease;
  }

  .login-enter,
  .loggin-leave-to {
    transform: translateY(500px);
    opacity: 0;
  }
  .m-r-100{
    margin-right: 100px;
  }
</style>
