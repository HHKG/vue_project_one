<template>
  <div class="hello">
    <el-input placeholder="请输入内容" :value="this.$store.state.count" :disabled="false">
    </el-input>
    <!-- 通过grtters直接获取转态池中的数据 -->
    <el-input placeholder="请输入内容(通过getters获取内容)" :value="count1" :disabled="false">
    </el-input>
    <!-- 通过mutations修改store数据池里面的数据-->
<!--   <el-input placeholder="请输入内容(通过getters获取内容)" v-model="input2" :disabled="false">
    </el-input> -->
    <p v-if="this.$store.state.ChangeShowCom">{{input}}</p>
    <button @click="add">+</button>
    <button @click="del">—</button>
    <button @click="hide">hide</button>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        input:this.$store.state.count ,
        input1:this.$store.getters.getCount,
        input2:this.$store.state.count,
      }
    },
    mounted() {
      console.log(this.$store.state.count,this.$store.state.ChangeShowCom)
    },
    computed:{
      ...mapState({
        count1:state=>state.count
      })
    },
    methods:{
      ...mapActions(['getAddCount','getDelCount']),
      add(){
        // this.$store.commit('addCount',1);
        // console.log(this.$store.state.count)
        // this.$store.dispatch('getAddCount',1)
        this.getAddCount(1)
        console.log(this.$store.state.count,'this.$store.state.countthis.$store.state.countthis.$store.state.countthis.$store.state.count')
      },
      del(){
        // this.$store.commit('delCount',1);
        // this.$store.dispatch('getDelCount',1)
        this.getDelCount(1);

      },
      hide(){
        this.$store.commit('hidden');
        console.log(this.$store.state.ChangeShowCom)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
