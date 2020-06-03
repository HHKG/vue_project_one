<template>
  <div class="container">
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="date" label="注册日期" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="power" label="权限">
      </el-table-column>
    </el-table>
    <div style="margin-top: 10px;">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          power:'管理员'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          power:'管理员'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          power:'管理员'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          power:'管理员'
        }]
      }
    }
  }
</script>
<style scoped="scoped">
  .container {
    margin: 30px;
  }
</style>
