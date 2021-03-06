import { getBannerInfo } from '@/utils/API/APIList.js'    //APIlist 按需载入方法
export default {
    namespaced: true,
    state: {
		interval: 3000,
		duration: 500,
		swiperData:[{
			id: 0,
			image: "/static/image/index/dynamic/swiper1.png",
			url: ''
		},{
			id: 1,
			image: '/static/image/index/dynamic/swiper1.png',
			url: ''
		},{
			id: 2,
			image: '/static/image/index/dynamic/swiper1.png',
			url: ''
		}],
		menuList:[{
			id: 0,
			icon: '/static/image/index/quality-service@2x.png',
			text: '质检服务',
			url: '/pages/index/quality-test/quality-test'
		},{
			id: 1,
			icon: '/static/image/index/trans-mode@2x.png',
			text: '交易模式	',
			url: '/pages/index/transaction-mode/transaction-mode'
		},{
			id: 2,
			icon: '/static/image/index/guide@2x.png',
			text: '入驻指引',
			url: ''
		}],
		itemList: [{
			id: 0,
			name: '福茂源',
			pic: '/static/image/index/dynamic/supplier-logo1.png'
		},{
			id: 1,
			name: '福茂源1',
			pic: '/static/image/index/dynamic/supplier-logo2.png'
		},{
			id: 2,
			name: '福茂源2',
			pic: '/static/image/index/dynamic/supplier-logo1.png'
		},{
			id: 3,
			name: '福茂源3',
			pic: '/static/image/index/dynamic/supplier-logo2.png'
		}],
		purchaseType: [{
			id: 0,
			type: '拼单采购',
			pic: '/static/image/index/trans-mode-pic1.png'
		},{
			id: 1,
			type: '直接采购'
		},{
			id: 2,
			type: '竞价采购'
		},{
			id: 3,
			type: '委托采购'
		}],
		productList:[{
			pid: 0,
			pic: '/static/image/index/dynamic/product-pic.png',
			name: '优质白砂糖 标题最多显示30个字',
			supplier: '中粮',
			sponsor: '达利园',
			score: 5.0,
			lastTime: '5天15小时20分钟'
		},{
			pid: 1,
			pic: '/static/image/index/dynamic/product-pic.png',
			name: '优质白砂糖 标题最多显示30个字标题最多显示30个字标题最多显示30个字',
			supplier: '中粮',
			sponsor: '达利园',
			score: 4.0,
			lastTime: '5天15小时20分钟'
		},{
			pid: 2,
			pic: '/static/image/index/dynamic/product-pic.png',
			name: '优质白砂糖 标题最多显示30个字',
			supplier: '中粮',
			sponsor: '达利园',
			score: 3.0,
			lastTime: '5天15小时20分钟'
		}]
    },
    mutations: {
      syncBannerInfo (state, list) {
        if (list.length > 0) {
			state.swiperData = []
			list.forEach((item,index) => {
				let obj = {}				
				state.swiperData.push({
					id: index,
					image: item.image
				})
			})
		}
      }
    },
    actions: {
      asyncBannerInfo({ commit, state }){
		console.log('测试获取data')
		getBannerInfo().then(res=> {
			if ( res.statusCode == 200){
				let arr = new Array();
				console.log('正常获取')
				res.data.list.forEach(item => {		//实际使用按data类型写
					arr.push({
						image: item.image
					})
				})
				commit('syncBannerInfo',arr)
			}
		}).catch(err => {
			console.log(err)
		})
      }
    }
  }