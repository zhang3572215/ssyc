import baseUrl from './url.js'
export default function apiRequest(param){
	let option ={
		method: 'get',
	    header: {
	      "content-type":'application/json'
	    }
	}
	Object.assign(option,param)
		switch (option.method) {
			case 'post':
				return postRequest(option);
				break;
			case 'get':				
				return getRequest (option);
				break;
			default: return postFile(option.url,option.data);
		}
	}
}
function postRequest(option){
	return new Promise((resolve, reject) => { 
		uni.request({
			method: 'POST',
			url: baseUrl+option.url,
			data: option.data,      
			header: {
			    "Content-Type": 'application/json'
			},
			success: res => {
				resolve(res)
			},
			fail: err => {
				reject(err)
			}
		})
	})
}
function getRequest(option){
	return new Promise((resolve, reject) => { 
		uni.request({
			method: 'GET',
			url: baseUrl+option.url,
			data: option.data,      
			header: {
			    "Content-Type": 'application/json'
			},
			success: res => {
				resolve(res)
			},
			fail: err => {
				reject(err)
			}
		})
	})
}