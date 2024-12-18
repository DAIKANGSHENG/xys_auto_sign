<template>
	<view class="config">
		<div class="avatar">
			<image @click="openImg" @longpress="clearSignImg" :src="imgUrl.defaultUrl" alt="" />
		</div>
		<div class="userInfo">
			<div class="Info">
				<div class="avatarImg">
					<image src="../../static/id.png" alt="">
				</div>
				<div class="avararInput">
					<input type="text" v-model="openId" placeholder="请输入openId" placeholder-style="font-size:15px;">
				</div>
			</div>
			<div class="Info">
				<div class="avatarImg">
					<image src="../../static/idlogin.png" alt="">
				</div>
				<div class="avararInput">
					<input type="text" v-model="unionId" placeholder="请输入unionId" placeholder-style="font-size:15px;">
				</div>
			</div>
			<div class="Info">
				<div class="avatarImg">
					<image src="../../static/idlogin.png" alt="">
				</div>
				<div class="avararInput">
					<input type="text" v-model="username" placeholder="请输入用户名" placeholder-style="font-size:15px;">
				</div>
			</div>
			<div class="Info">
				<div class="avatarImg">
					<image src="../../static/idlogin.png" alt="">
				</div>
				<div class="avararInput">
					<input type="text" v-model="password" placeholder="请输入密码" placeholder-style="font-size:15px;">
				</div>
			</div>
			<div class="Info">
				<div class="avatarImg">
					<image src="../../static/lat.png" alt="">
				</div>
				<div class="avararInput">
					<input type="text" v-model="lat" placeholder="请输入签到坐标的Latitude" placeholder-style="font-size:15px;">
				</div>
			</div>
			<div class="Info">
				<div class="avatarImg">
					<image src="../../static/lng.png" alt="">
				</div>
				<div class="avararInput">
					<input type="text" v-model="lng" placeholder="请输入签到坐标的Longitude"
						placeholder-style="font-size:15px;">
				</div>
			</div>
		</div>
		<div class="sign">
			<div class="sumit" @click='sumitInfo'>
				Sumit Info
			</div>
		</div>
    <canvas style="border: 1px solid green;position: absolute;top: -10000px;left: -1000px;" :style="{'width':canvansWidth+'px','height': canvansHeight+'px'}" canvas-id="firstCanvas" ref="mycanvas"></canvas>
	</view>
</template>

<script>
	import request from "../../utils/request.js"
	import md5 from "blueimp-md5";
	export default {
		data() {
			return {
				openId: '',
				unionId: '',
				lat: '',
				lng: '',
				sessionId: '',
				traineeId: '',
				phone: '',
				adcode: '',
				address: '',
				status: '',
				username: '',
				password: '',
				imgUrl: {
					isChoose: 0,
					defaultUrl: '../../static/avatar.png'
				},
				signImgStr: '',
				encryptValue: '',
				model: '',
        week:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
        canvansWidth:0,
        canvansHeight:0,
        cache:''
			}
		},
		methods: {
			sumitInfo() {
        if(this.week[new Date().getDay()]=='星期日'||this.week[new Date().getDay()]=='星期六'){
          uni.showModal({
            title: '提示',
            content: '周六周日不用打卡',
            success: (res) => {
              return
            }
          })
          return
        }
				uni.showLoading({
					title: '加载中'
				});
				uni.setStorageSync('user_data', {
					openId: this.openId,
					unionId: this.unionId,
					lat: this.lat,
					lng: this.lng,
					username: this.username,
					password: this.password
				})
        if(uni.getStorageSync('JSESSIONID')){
          this.sessionId=uni.getStorageSync('JSESSIONID')
        }
				const md5 = require("blueimp-md5");
				request({
					url: 'login/login.action',
					method: 'POST',
					data: {
						username: this.username,
						password: md5(this.password),
						openId: this.openId,
						unionId: this.unionId
					},
          cookie:'JSESSIONID='+this.sessionId,
					addHeader: {
						'referer': 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
					}
				}).then(res => {
					if (res.code != 200) {
						uni.hideLoading();
						uni.showModal({
							title: '提示',
							content: '登录出错，请检查登录信息是否正确',
							success: (res) => {
								return
							}
						})
					} else {
						this.phone = res.data.phone
						this.sessionId = res.data.sessionId
						this.encryptValue = res.data.encryptValue
            uni.setStorageSync('JSESSIONID', this.sessionId)
						//获取trainrrId
						this.getTraineeId()
					}
				})
			},
			openImg() {
				console.log('------------------------')
				uni.chooseImage({
					success: (res) => {
            console.log(res)
            uni.saveFile({
              tempFilePath: res.tempFilePaths[0],
              success:saveImg=>{
                console.log(saveImg)
                this.cache=saveImg.savedFilePath
                this.imgUrl = {
                  isChoose: 1,
                  defaultUrl: saveImg.savedFilePath
                }
              }
            })
						this.imgUrl = {
							isChoose: 1,
							defaultUrl: res.tempFilePaths[0]
						}
						// this.commonPostPolicy()
					}
				})
			},
      clearSignImg(){
        this.imgUrl = {
          isChoose: 0,
          defaultUrl: '../../static/avatar.png'
        }
      },
			getAdcode() {
				let locationParams = {
					key: "c222383ff12d31b556c3ad6145bb95f4",
					location: this.lng + ',' + this.lat,
					extensions: "all",
					s: "rsx",
					platform: "WXJS",
					appname: "c222383ff12d31b556c3ad6145bb95f4",
					sdkversion: "1.2.0",
					logversion: "2.0",
				}
				uni.request({
					url: 'https://restapi.amap.com/v3/geocode/regeo',
					method: 'GET',
					data: locationParams,
					header: {
						Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
					}
				}).then(res => {
					console.log(res)
					this.address = res.data.regeocode.formatted_address
					this.adcode = res.data.regeocode.addressComponent.adcode
					uni.hideLoading();
					if (typeof this.address == 'object') {
						uni.showModal({
							title: '打卡位置信息有误',
							content: '是否自动获取学校打卡位置',
							success: (res) => {
								if (res.confirm) {
									uni.showLoading({
										title: '加载中'
									});
									this.getStatus('getLocation')
								}
							}
						})
					} else {
						uni.showModal({
							title: '确认打卡位置',
							content: this.address,
							success: (res) => {
								if (res.confirm) {
									uni.showLoading({
										title: '加载中'
									});
									this.getStatus('normal')
								}
							}
						})
					}

					// this.SIGN_IN()
				})
			},
			getTraineeId() {
				request({
					url: 'student/clock/GetPlan.action',
					method: 'POST',
					cookie: 'JSESSIONID=' + this.sessionId,
					addHeader: {
						encryptValue: this.encryptValue,
						Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
					}
				}).then(res => {
					this.traineeId = res.data[0].dateList[0].traineeId
					this.getAdcode()
				})
			},
			getStatus(key) {
				request({
					url: 'student/clock/GetPlan!detail.action',
					method: "POST",
					data: {
						traineeId: this.traineeId
					},
					cookie: 'JSESSIONID=' + this.sessionId,
					addHeader: {
						encryptValue: this.encryptValue,
						Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
					}
				}).then(res => {
					if (key == 'getLocation') {
						this.lat = res.data.postInfo.lat
						this.lng = res.data.postInfo.lng
						uni.setStorageSync('user_data', {
							openId: this.openId,
							unionId: this.unionId,
							lat: this.lat,
							lng: this.lng,
							username: this.username,
							password: this.password
						})
						this.getAdcode()
					} else {
						let status = res.data.clockInfo.status
						this.status = status
						console.log(this.status)
						if (this.imgUrl.isChoose) {
              //获取信息
              this.getUserInfo()
							// this.commonPostPolicy()
						} else {
							if (this.status != 0) {
								this.SIGN_IN('student/clock/PostNew.action', this.status)
							} else {
								this.SIGN_IN('student/clock/PostNew!updateClock.action', '1')
							}
						}
					}

				})
			},
      getUserInfo(){
        request({
          url: 'account/LoadAccountInfo.action',
          method: 'POST',
          cookie: 'JSESSIONID=' + this.sessionId,
          addHeader: {
            encryptValue: this.encryptValue,
            Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
          }
        }).then(res=>{
          let {loginer,klass}=res.data;
          this.drawInfoImg(loginer,klass)
        })
      },
      drawInfoImg(loginer,klass){
        uni.getImageInfo({
          src: this.imgUrl.defaultUrl,
          success: (e) => {
            console.log(e)
            this.canvansWidth=e.width/2
            this.canvansHeight=e.height/2
            let ctx = uni.createCanvasContext('firstCanvas', this)
            setTimeout(()=>{
              ctx.fillRect(0, 0, this.canvansWidth,this.canvansHeight);
              // //将图片src放到cancas内，宽高为图片大小
              ctx.drawImage(e.path, 0, 0,this.canvansWidth , this.canvansHeight);
              ctx.beginPath()
              ctx.setFontSize(12)
              ctx.setFillStyle('#fff');
              let hour=new Date().getHours()<10?'0'+new Date().getHours():new Date().getHours()
              let minutes=new Date().getMinutes()<10?'0'+new Date().getMinutes():new Date().getMinutes()
              let month=new Date().getMonth()+1<10?'0'+new Date().getMonth()+1:new Date().getMonth()
              let today=new Date().getDate()<10?'0'+new Date().getDate():new Date().getDate()
              let year=new Date().getFullYear()
              let currentWeek=this.week[new Date().getDay()]
              ctx.fillText(year+'.'+month+'.'+today,90,25,this.canvansWidth);
              ctx.fillText(currentWeek,144,25,this.canvansWidth);
              ctx.fillText(this.address,30,50)
              ctx.fillText(`${loginer} ${klass}`,30,70)
              ctx.setFontSize(18)
              ctx.fillText(hour+':'+minutes,30,25,this.canvansWidth);
              console.log(ctx)
              ctx.draw(false, () => {
                uni.canvasToTempFilePath({ //将画布中内容转成图片，即水印与图片合成
                  canvasId: 'firstCanvas',
                  success: (newImg) => {
                    this.imgUrl = {
                      isChoose: 0,
                      defaultUrl: newImg.tempFilePath
                    }
                    this.commonPostPolicy()
                  },
                  fail:dx=>{
                    console.log(dx)
                  }
                })
              })
            },1000)
          },
          fail:jjj=>{
            console.log(this.imgUrl.defaultUrl)
            console.log(jjj)
          }
        })

      },
			commonPostPolicy() {
				console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
				request({
					url: 'uploadfile/commonPostPolicy.action',
					method: 'POST',
					data: {
						customerType: 'STUDENT',
						uploadType: 'UPLOAD_STUDENT_CLOCK_IMGAGES',
						publicRead: true
					},
					cookie: 'JSESSIONID=' + this.sessionId,
					addHeader: {
						encryptValue: this.encryptValue,
						Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
					}
				}).then(res => {
					this.uplodFile(res.data)
				})
			},
			uplodFile(data) {
				console.log(data)
				console.log(data.dir)
				uni.uploadFile({
					url: 'https://xyb001-new.oss-cn-hangzhou.aliyuncs.com/',
					filePath: this.imgUrl.defaultUrl,
					name: 'file',
					formData: {
						key: data.dir + '/' + new Date().getTime() + '.jpg',
						policy: data.policy,
						OSSAccessKeyId: data.accessid,
						signature: data.signature,
						success_action_status: '200',
						customerType: 'STUDENT',
						uploadType: 'UPLOAD_STUDENT_CLOCK_IMGAGES',
						callback: data.callback
					},
					success: (res) => {
						console.log(res)
						this.signImgStr = JSON.parse(res.data).vo.key
						if (this.status != 0) {
							this.SIGN_IN('student/clock/PostNew.action', this.status)
						} else {
							this.SIGN_IN('student/clock/PostNew!updateClock.action', '1')
						}
					}
				})
			},
			SIGN_IN(url, status) {
				let data = {
					'traineeId': this.traineeId,
					'adcode': this.adcode,
					'lat': this.lat,
					'lng': this.lng,
					'address': this.address,
					'deviceName': this.model,
					'punchInStatus': '0',
					'clockStatus': status,
					'imgUrl': this.signImgStr,
					'addressId': 'null'
				}
				request({
					url,
					method: 'POST',
					data,
					cookie: 'JSESSIONID=' + this.sessionId,
					addHeader: {
						encryptValue: this.encryptValue,
						Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
					}
				}).then(res => {
					console.log('---------------------------')
					console.log(res)
					console.log('---------------------------')
          uni.removeSavedFile({
            filePath:this.cache,
            success:(fileImg)=>{
              console.log(fileImg,'删除成功')
            },
            fail:rr=>{
              console.log(rr)
            }
          })
          console.log('qwertyuiouytfdx--------------dfvgbthtgfdrgtgt---------------')
					uni.hideLoading();
					uni.showModal({
						title: '提示',
						content: '打卡成功',
						success: (res) => {
							if (res.confirm) {
								uni.switchTab({
									url: '/pages/index/index'
								});
							}
						}
					})

				})
			}
		},
		onLoad: function() {
			uni.getSystemInfo({
				success: (res) => {
					this.model = res.model
				}
			})

			let user_data = uni.getStorageSync('user_data')
			if (user_data) {
				this.openId = user_data.openId
				this.unionId = user_data.unionId
				this.lat = user_data.lat
				this.lng = user_data.lng
				this.username = user_data.username
				this.password = user_data.password
			}
		}
	}
</script>

<style scoped>
	.config {
		width: 100vw;
		height: 100vh;
		padding: 7px;
    overflow: hidden;
		box-sizing: border-box;
	}

	.avatar {
		width: 100%;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.avatar>image {
		width: 130px;
		height: 130px;
		border-radius: 50%;
	}

	.userInfo {
		width: 100%;
		flex-flow: wrap;
		display: flex;
		justify-content: center;
	}

	.userInfo>.Info {
		width: 80%;
		display: flex;
		padding-top: 25px;
		align-items: center;
		flex-wrap: wrap;
	}

	.userInfo>.Info>.avatarImg {
		width: 40px;
		padding: 0 10px;
	}

	.userInfo>.Info>.avatarImg>image {
		width: 40px;
		height: 40px;
	}

	.userInfo>.Info>.avararInput {
		flex: 1;
		height: 100%;
		display: flex;
	}

	.userInfo>.Info>.avararInput>input {
		height: 80%;
		border-bottom: 1px solid #6c8dba;
		align-items: center;
		width: 100%;
	}

	.sign {
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sign>.sumit {
		width: 70%;
		height: 40px;
		line-height: 40px;
		background-color: #226bd4;
		border-radius: 100px;
		text-align: center;
		color: #fff;
	}
</style>