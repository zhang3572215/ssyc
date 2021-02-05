import { getBannerInfo } from '@/utils/API/APIList.js'    //APIlist 按需载入方法
export default {
    namespaced: true,
    state: {
		interval: 3000,
		duration: 500,
		swiperData:[{
			id: 0,
			image: "/static/image/index/swiper1.png",
			url: ''
		},{
			id: 1,
			image: '/static/image/index/swiper1.png',
			url: ''
		},{
			id: 2,
			image: '/static/image/index/swiper1.png',
			url: ''
		}],
		menuList:[{
			id: 0,
			icon: '/static/image/index/quality-service@2x.png',
			text: '质检服务',
			url: ''
		},{
			id: 1,
			icon: '/static/image/index/trans-mode@2x.png',
			text: '交易模式	',
			url: ''
		},{
			id: 2,
			icon: '/static/image/index/guide@2x.png',
			text: '入驻指引',
			url: ''
		}],
		itemInfo:{
			itemName: '优质供应商',
			itemUrl: '',
			itemList: [{
				id: 0,
				name: '福茂源',
				pic: '../../static/image/menu-icon.png'	
			},{
				id: 1,
				name: '福茂源1',
				pic: '../../static/image/menu-icon.png'	
			},{
				id: 2,
				name: '福茂源2',
				pic: '../../static/image/menu-icon.png'	
			},{
				id: 3,
				name: '福茂源3',
				pic: '../../static/image/menu-icon.png'	
			}]
		}
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