import Vue from 'vue'
import Vuex from 'vuex'

// import { getRecorderBy } from '@/utils/ApiList'			//一般情况下请求的页面初始化数据放到
import IndexData from './indexData.js'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
    state:{//存放状态,这里相当于跟状态树
        
    },
	//计算属性
	getters:{},
	//数据改变的唯一方法就是mutation(该方法是同步的)
	mutations:{},
	//action 提交的是 mutation，通过 mutation 来改变 state (该方法是异步的)
	actions: {},
	//模块	
	modules:{
		indexData:IndexData,
	}
})

export default store