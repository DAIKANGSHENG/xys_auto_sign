<template>
	<view class="content">
		<view class="title">
			<view class="header">
				<view class="sx">{{school}}</view>
			</view>
			<view class="header">
				<view class="zy">{{specialized}}</view>
			</view>
		</view>
		<view class="signdetaildata">
			<view class="itemdata">
				<view class="datatitle">
					<view class="dataradio" style="background-color: #3d80fa;"></view>
					应签天数
				</view>
				<view class="datanum">
					{{needSign}}<text style="color: #b0b0b0;font-size: 14px;">天</text>
				</view>
			</view>
			<view class="itemdata">
				<view class="datatitle">
					<view class="dataradio" style="background-color: #1ec118;"></view>
					已签天数
				</view>
				<view class="datanum">
					{{signed}}<text style="color: #b0b0b0;font-size: 14px;">天</text>
				</view>
			</view>
			<view class="itemdata">
				<view class="datatitle">
					<view class="dataradio" style="background-color: #1ec118;"></view>
					已签次数
				</view>
				<view class="datanum">
					{{signfrequency}}<text style="color: #b0b0b0;font-size: 14px;">天</text>
				</view>
			</view>
			<view class="itemdata">
				<view class="datatitle">
					<view class="dataradio" style="background-color: #e4e9f2;"></view>
					未签天数
				</view>
				<view class="datanum">
					{{noSign}}<text style="color: #b0b0b0;font-size: 14px;">天</text>
				</view>
			</view>
		</view>
		<view class="signday">
			<view>
				<view class="dataradio" style="background-color: #1ec118;"></view>
				正常签到：{{rightSign}}天
			</view>
			<view>
				<view class="dataradio" style="background-color: #fb9019;"></view>
				外勤签到：{{errSign}}天
			</view>
		</view>
		<view class="signdetail">
			<view class="signstart">
				<view class="signtitle">
					签到
          <image :src="signInimgUrl"></image>
				</view>
				<view class="signstatus">
					<view :class="signInStatus=='正常'?'status':'noright'">{{signInStatus}}</view>
					<view class="signtime">{{signIntime}}</view>
				</view>
			</view>
			<view class="signstart">
				<view class="signtitle">
					签退
          <image :src="signOutimgUrl"></image>
				</view>
				<view class="signstatus">
					<view :class="signOutStatus=='正常'?'status':'noright'">{{signOutStatus}}</view>
					<view class="signtime">{{signOuttime}}</view>
				</view>
			</view>
		</view>
		<view class="sign_location">
			<div class="phone">
				<image src='../../static/phonee.png'></image>
				<view>手机号：{{phone}}</view>
			</div>
			<div class="signin">
				<image src='../../static/addresss.png'></image>
				<view>签到地点：{{signLocation}}</view>
			</div>
			<div class="signout">
				<image src='../../static/addresss.png'></image>
				<view>签退地点：{{signOutLocation}}</view>
			</div>
		</view>
    <view class="listshow">
      <view>{{className}} . 实习工时排行</view>
    </view>
    <view class="rank">
     <view class="rankitem"  v-for="(item,index) in rankList">
       <view class="stuname">
         <image v-if="item.rankUrl" class="rankimg" :src="item.rankUrl"></image>
         <view v-else class="paiming">{{item.ranking}}</view>
         <image class="rankavatar" src="../../static/avatar_man.png"></image>
         <view class="rankname">{{item.userName}}</view>
       </view>
       <view class="ranktime">
         平均工时{{item.avgWorks}}小时
       </view>
     </view>
    </view>

	</view>
</template>

<script>
	import request from "../../utils/request.js"
	export default {
		data() {
			return {
				school:'毕业实习',
				signLocation:'未知',
				signOutLocation:'未知',
				phone:'未知',
				specialized:'未知',
				needSign:'未知',
				signed:'未知',
				signfrequency:'未知',
				noSign:'未知',
				rightSign:'未知',
				errSign:'未知',
				signInStatus:'未知',
				signOutStatus:'未知',
				signIntime:'未知',
				signOuttime:'未知',
				sessionId:'',
				traineeId:'',
				planId:'',
				status:2,
        encryptValue:'',
        signInimgUrl:'../../static/bag.png',
        signOutimgUrl:'../../static/bag.png',
        className:'未知',
        rankList:[{rankUrl:'../../static/rankone.png',userName:'请配置信息',avgWorks:'null'},{rankUrl:'../../static/ranktwo.png',userName:'请配置信息',avgWorks:'null'},{rankUrl:'../../static/rankthree.png',userName:'请配置信息',avgWorks:'null'}]
			}
		},
		onLoad() {

		},
		onShow() {
			let user_data=uni.getStorageSync('user_data')
      if(uni.getStorageSync('JSESSIONID')){
        this.sessionId=uni.getStorageSync('JSESSIONID')
      }
			if(user_data){
				this.login(user_data)
			}
		},
		methods: {
			login(user_data){
        const md5 = require("blueimp-md5");
				request({
					url:'login/login.action',
					method:'POST',
					data:{username:user_data.username,password:md5(user_data.password),openId:user_data.openId,unionId:user_data.unionId},
          cookie:'JSESSIONID='+this.sessionId,
          addHeader:{
            'referer':'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
          }
				}).then(res=>{
          console.log(res)
					this.phone=res.data.phone
					this.sessionId=res.data.sessionId
          this.encryptValue=res.data.encryptValue
					//获取trainrrId
					this.getTraineeId()
				})
			},
			getPlan(){
				request({
					url:'student/clock/GetPlan!detail.action',
					method:"POST",
					data:{traineeId:this.traineeId},
					cookie:'JSESSIONID='+this.sessionId,
          addHeader:{
            encryptValue:this.encryptValue,
            Referer:'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
          }
				}).then(res=>{
					let data=res.data
          this.signInimgUrl=data.clockInfo.inImgUrl?data.clockInfo.inImgUrl:this.signInimgUrl
          this.signOutimgUrl=data.clockInfo.outImgUrl?data.clockInfo.outImgUrl:this.signOutimgUrl
          let inImgUrl=data.clockInfo.inImgUrl
					this.status=res.data.clockInfo.status
					if(this.status==2){
						this.signInStatus='未签'
						this.signOutStatus='未签'
						this.signIntime='请签到'
						this.signOuttime='请签到'
						this.signLocation='未签到，无法获取'
						this.signOutLocation='未签到，无法获取'
					}else{
						this.signInStatus=data.clockInfo.inStatus==1?'外勤':'正常'
						this.signIntime=data.clockInfo.inTime+'已打卡'
						this.signLocation=data.clockInfo.inAddress
						this.signOuttime='请签到'
						this.signOutLocation='未签到，无法获取'
						if(this.status==1){
							this.signOutStatus='未签'
						}else{
							this.signOutStatus=data.clockInfo.outStatus==1?'外勤':'正常'
							this.signOutLocation=data.clockInfo.outAddress
							this.signOuttime=data.clockInfo.outTime+'已打卡'
						}
					}
					this.getplanId()
				})
			},
			getplanId(){
				request({
					url:'student/clock/GetPlan!getDefault.action',
					method:'GET',
					data:{status:'INTERRUPTED'},
					cookie:'JSESSIONID='+this.sessionId,
          addHeader:{
            encryptValue:this.encryptValue,
            Referer:'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
          }
				}).then(res=>{
					console.log(res)
					this.planId=res.data.clockVo.planId
					this.specialized=res.data.clockVo.planName
					this.school=res.data.clockVo.projectName
					this.getTongJi()
				})
			},
			getTongJi(){
				request({
					url:"student/clock/clockStatistic.action",
					method:'GET',
					data:{planId:this.planId},
					cookie:'JSESSIONID='+this.sessionId,
          addHeader:{
            encryptValue:this.encryptValue,
            Referer:'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
          }
				}).then(res=>{
					this.needSign=res.data.needClockDays
					this.signed=res.data.clockDays
					this.signfrequency=res.data.clockTimes
					this.noSign=res.data.unClockDays
					this.rightSign=res.data.normalClockDays
					this.errSign=res.data.abnormalClockDays
          this.getRank()
				})
			},
      getRank(){
        request({
          url:'student/clock/PunchIn!rankingList.action',
          method:'POST',
          cookie:'JSESSIONID='+this.sessionId,
          data:{
            traineeId:this.traineeId,
            months:new Date().getFullYear()+'-'+(new Date().getMonth()+1)
          },
          addHeader:{
            encryptValue:this.encryptValue,
            Referer:'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
          }
        }).then(res=>{
          this.className=res.data.className
          let sortRanking=res.data.rankingList.sort((a,b)=>a.ranking-b.ranking)
          sortRanking[0].rankUrl='../../static/rankone.png'
          sortRanking[1].rankUrl='../../static/ranktwo.png'
          sortRanking[2].rankUrl='../../static/rankthree.png'
          this.rankList=sortRanking
        })
      },
			getTraineeId(){
				request({
					url:'student/clock/GetPlan.action',
					method:'POST',
					cookie:'JSESSIONID='+this.sessionId,
          addHeader:{
            encryptValue:this.encryptValue,
            Referer:'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
          }
				}).then(res=>{
					this.traineeId=res.data[0].dateList[0].traineeId
					this.getPlan()
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
		position: relative;
	}
	.title{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 10px;
	}
	.title>.header{
		width: 60%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.title>.header>view{
		display: inline;
	}
	.header>.sx{
		font-size: 20px;
	}
	.header>.zy{
		font-size: 14px;
		color: #999999;
	}
	.signdetail{
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		box-sizing: border-box;
	}
	.signdetail>view{
		width: 47%;
		background-color: #f6f6f6;
		border-radius: 4px;
		padding: 7px 5px;
		box-sizing:border-box;
	}
	.signstart>.signstatus{
		display: flex;
		align-items: center;
		padding: 3px 0;
	}
  .signstart>.signtitle{
    display: flex;
    align-items: center;
  }
  .signstart>.signtitle>image{
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }
	.signstart>.signstatus>.status{
		width: 28px;
		height: 15px;
		line-height: 17px;
		text-align: center;
		border: 1px solid #4990e2;
		border-radius: 3px;
		font-size: 10px;
		color: #4990e2;
	}
	.signstart>.signstatus>.signtime{
		font-size: 14px;
		color: #999999;
		padding: 07px;
	}
	.signdetaildata{
		border-top: 12px solid #f4f5f4;
		display: flex;
	}
	.signdetaildata>.itemdata{
		width: 25%;
		padding: 10px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.signdetaildata>.itemdata>.datatitle{
		display: flex;
		align-items: center;
		font-size: 10px;
		padding-bottom: 7px;
	}
	.signdetaildata>.itemdata>.datanum{
		font-size: 20px;
	}
	.dataradio{
		width: 5px;
		height: 5px;
		background-color: #4082fa;
		margin-right: 4px;
		border-radius: 50%;
	}
	.signday{
		height: 45px;
		line-height: 45px;
		background-color: #fafafa;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 22px;
	}
	.signday>view{
		display: flex;
		align-items: center; 
		font-size: 16px;
		color: #7d7874;
	}
	.sign_location{
		box-sizing: border-box;
	}
	.sign_location>div{
		display: flex;
		align-items: center;
		height: 30px;
		line-height: 30px;
		padding:5px;
	}
	.sign_location>div>view{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.sign_location>div>image{
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}
	.noright{
		width: 28px;
		height: 15px;
		line-height: 17px;
		text-align: center;
		border: 1px solid #ff8803;
		border-radius: 3px;
		font-size: 10px;
		color: #ff8803;
	}
  .rank{
    padding: 10px;
    box-sizing: border-box;
  }
  .rank>.rankitem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 1px 2px 2px 0px #f6f6f6;
  }
  .rank>.rankitem>.stuname{
    display: flex;
    align-items: center;
  }
  .rank>.rankitem>.stuname>.rankimg{
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .rank>.rankitem>.stuname>.rankavatar{
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 50%;
  }
  .rank>.rankitem>.stuname>.rankname{
    font-size: 16px;
  }
  .ranktime{
    font-size: 14px;
  }
  .paiming{
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 18px;
    margin-right: 10px;
  }
  .listshow{
    width: 100%;
    display: flex;
    justify-content: center;
    padding:10px;
    box-sizing: border-box;
  }
  .listshow>view{
    width: 98%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: #e9eae7;
    border-radius: 50px;
    font-size: 13px;
    color: #6b9ee1;
  }
</style>
