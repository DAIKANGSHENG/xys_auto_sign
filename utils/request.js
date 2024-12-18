const {getHeaders}=require('./xyb.js')
const baseUrl='https://xcx.xybsyw.com/'
export default (params)=>{
	let url=params.url
	let method=params.method
	let data=params.data
	let cookie=params.cookie?params.cookie:''
	console.log(cookie)
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl+url,
			withCredentials:true,
			method,
			data,
			header:{
				...getHeaders(url,data),
				'Content-Type':'application/x-www-form-urlencoded',
				Cookie:cookie,
				...params.addHeader
			},
			success:(response)=>{
				resolve(response.data)
			}
		})
	})
}