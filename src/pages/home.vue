<template>
  <div>
    <h1>数据统计</h1>
    <div>
      <el-row class="m-b-30 m-l-30">
        <el-button type="warning">当日数据：</el-button>
        <el-button><b>123</b>新增用户</el-button>
        <el-button><b>4</b>新增订单</el-button>
        <el-button><b>28</b>新增成员</el-button>
      </el-row>
      <el-row class="m-b-30 m-l-30">
        <el-button type="primary">总体数据：</el-button>
        <el-button><b>123</b>注册用户</el-button>
        <el-button><b>456</b>订单</el-button>
        <el-button><b>879</b>管理员</el-button>
      </el-row>
    </div>
    <div ref="brokenLine" style="width: 717px;height: 400px;margin: 100px auto 0;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  export default{
    data(){
      return{

      }
    },
    mounted() {
      this.makeBrokenLine();
    },
    methods:{
      makeBrokenLine(){
        let brokenLineDom=this.$refs.brokenLine;
        let myBrokenLine=echarts.init(brokenLineDom);
        let option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        myBrokenLine.setOption(option);
      }
    }

  }
</script>

<style scoped="scoped">
  @import url("../style/global.css");
  h1{
    text-align: center;
  }
</style>
