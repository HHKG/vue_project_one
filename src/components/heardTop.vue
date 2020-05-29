<template>
  <div class="header-container">
    <el-breadcrumb separator="/" class="l-h">
      <el-breadcrumb-item :to="{ path: '/HomePage' }">头部</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
   <el-dropdown @command="handleCommand" menu-align='start' class="f-r logo-position">
    	<img src="../assets/logo.png" class="avator" width="49px" height="49px">
    	<el-dropdown-menu slot="dropdown">
    		<el-dropdown-item command="home">首页</el-dropdown-item>
    		<el-dropdown-item command="signout">退出</el-dropdown-item>
    	</el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    mounted() {

    }
    ,
    methods:{

    }
  }
</script>

<style scoped="scoped">
  .header-container{
    height: 70px;
    background: #EFF2F7;
    position: relative;
    padding:0px 10px;
  }
  .header-container::after{
    display: block;
    height: 0;
    content: "";
    clear: both;
    visibility: hidden;
  }
  .logo-position{
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top:-24.5px;
  }
  .f-r{
    float: right;
  }
  .l-h{
    line-height: 70px;
  }
</style>
