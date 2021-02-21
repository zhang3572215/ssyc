import { getBannerInfo } from '@/utils/API/APIList.js'    //APIlist 按需载入方法
export default {
    namespaced: true,
    state: {
		contentList:[{
			id: 0,
			image: "/static/image/icons/dynamic/content-1.png",
			text: '食品理化检测',
			url: ''
		},{
			id: 1,
			image: "/static/image/icons/dynamic/content-2.png",
			text: '食品添加剂检测',
			url: ''
		},{
			id: 2,
			image: "/static/image/icons/dynamic/content-3.png",
			text: '一次性卫生用品检测',
			url: '',
		},{
			id: 3,
			image: "/static/image/icons/dynamic/content-4.png",
			text: '水质检测',
			url: '',
		},{
			id: 4,
			image: "/static/image/icons/dynamic/content-5.png",
			text: '农残检测',
			url: '',
		},{
			id: 5,
			image: "/static/image/icons/dynamic/content-6.png",
			text: '微生物检测',
			url: '',
		},{
			id: 6,
			image: "/static/image/icons/dynamic/content-7.png",
			text: '茶叶检测',
			url: '',
		},{
			id: 7,
			image: "/static/image/icons/dynamic/content-8.png",
			text: '元素检测',
			url: '',
		},{
			id: 8,
			image: "/static/image/icons/dynamic/content-9.png",
			text: '饲料检测',
			url: '',
		}],
		deviceList: [{
			id: 0,
			image: "/static/image/icons/dynamic/device-img-01.png",
			text: '液相色谱仪',
			url: '',
		},{
			id: 1,
			image: "/static/image/icons/dynamic/device-img-02.png",
			text: '石墨炉原子分光光度计',
			url: '',
		},{
			id: 2,
			image: "/static/image/icons/dynamic/device-img-03.png",
			text: '液相-原子荧光光谱仪',
			url: '',
		},{
			id: 3,
			image: "/static/image/icons/dynamic/device-img-04.png",
			text: '紫外分析仪',
			url: '',
		},{
			id: 4,
			image: "/static/image/icons/dynamic/device-img-05.png",
			text: '真空干燥箱',
			url: '',
		},{
			id: 5,
			image: "/static/image/icons/dynamic/device-img-06.png",
			text: '电感耦合等离子体质谱仪',
			url: '',
		}]
    },
    mutations: {
      
    },
    actions: {
      
    }
  }