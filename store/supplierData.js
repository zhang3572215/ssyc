import { getBannerInfo } from '@/utils/API/APIList.js'    //APIlist 按需载入方法
export default {
    namespaced: true,
    state: {
		supplierList:[{
			pid: 0,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 1
		},{
			pid: 1,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称1',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 1
		},{
			pid: 2,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称2',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 1
		},{
			pid: 3,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称3',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 1
		},{
			pid: 4,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称4',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 1
		},{
			pid: 5,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称5',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 0
		},{
			pid: 6,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称6',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 10
		},{
			pid: 7,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称7',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 10
		},{
			pid: 8,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称8',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 10
		},{
			pid: 9,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称9',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 10
		},{
			pid: 10,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称10',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 10
		},{
			pid: 11,
			pic: '/static/image/index/dynamic/supplier-logo1.png',
			name: 'xx供应商名称11',
			institution: '中纺质检',
			product: '白砂糖',
			quality: 10
		}]
    },
    mutations: {
		syncListUPdate(state, list) {
			state.supplierList = state.supplierList.concat(list)
		}
    },
    actions: {
		asyncListUPdate({ commit, state }, list){
			console.log(list.length)
			commit('syncListUPdate',list)
		}
    }
  }