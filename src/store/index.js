// 首先引用vue和vuex这两个依赖；
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex); //使用Vuex依赖
export default new Vuex.Store({ //导出一个实例化对象
  state:{
    username:'KG',
    password:'123456'
    // count:0,
    // ChangeShowCom:true
  },
  // getters方便生成一些可以直接使用的数据。当组装的数据要在多个组件使用时，就可以使用getters来做，getters可以实时监听state的变化；
  getters:{
    // getCount(state){
    //   return state.count;
    // },
    // isshow(state){
    //   return state.ChangeShowCom;
    // }
  },
  mutations:{
      //  addCount(state,sum){
      //   state.count=state.count+sum;
      //   console.log(state.count)
      // },
      // delCount(state,sum){
      //   state.count=state.count-sum;
      //   console.log(state.count)
      // },
      // hidden(state){
      //   state.ChangeShowCom=!state.ChangeShowCom;
      // }
  },
  actions:{
    // getAddCount(context,num){
    //   context.commit('addCount',num);
    // },
    // getDelCount(context,num){
    //   context.commit('delCount',num);
    // }
  }
})
