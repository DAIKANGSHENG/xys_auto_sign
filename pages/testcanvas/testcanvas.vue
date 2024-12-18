<template>
  <view class="config">
    <div class="avatar">
      <image @click="openImg" :src="imgUrl.defaultUrl" alt="" />
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
    <canvas style="border: 1px solid green;" :style="{'width':w+'px','height': h+'px'}" canvas-id="firstCanvas" ref="mycanvas"></canvas>
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
      h:0,
      w:0,
      week:['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    }
  },
  methods: {
    sumitInfo() {
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
          //获取trainrrId
          this.getTraineeId()
        }
      })
    },
    openImg() {
      console.log('------------------------')
      uni.chooseImage({
        success: (res) => {
          this.imgUrl = {
            isChoose: 1,
            defaultUrl: res.tempFilePaths[0]
          }
          uni.compressImage({
            src: this.imgUrl.defaultUrl,
            quality: 80,
            width: '60%',
            height: '60%',
            success: res2 => {
              uni.getImageInfo({
                src: res2.tempFilePath,
                success: (e) => {
                  console.log(e)
                  let ctx = uni.createCanvasContext('firstCanvas', this)
                  console.log(ctx)
                  this.w=e.width/2
                  this.h=e.height/2
                 setTimeout(()=>{
                   ctx.fillRect(0, 0, e.width / 2, e.height / 2);
                   // //将图片src放到cancas内，宽高为图片大小
                   ctx.drawImage(e.path, 0, 0, e.width/2, e.height/2);
                   ctx.beginPath()
                   ctx.setFontSize(12)
                   ctx.setFillStyle('#fff');
                   let hhh=new Date().getHours()<10?'0'+new Date().getHours():new Date().getHours()
                   let hhh1=new Date().getMinutes()<10?'0'+new Date().getMinutes():new Date().getMinutes()
                   let hhh2=new Date().getMonth()+1<10?'0'+new Date().getMonth()+1:new Date().getMonth()
                   let hhh3=new Date().getDate()<10?'0'+new Date().getDate():new Date().getDate()
                   let year=new Date().getFullYear()
                   let currentWeek=this.week[new Date().getDay()]
                   console.log(currentWeek)

                   console.log(hhh+':'+hhh1)
                   console.log(year+'.'+hhh2+'.'+hhh3)
                   console.log(new Date().getDay())
                   ctx.fillText(year+'.'+hhh2+'.'+hhh3,90,25,e.width/2);
                   ctx.fillText(currentWeek,144,25,e.width/2);
                   ctx.fillText('河南省驻马店市驿城区金河街道黄淮学院（南区）',30,50)
                   ctx.fillText('代康生 数应2103B',30,70)
                   ctx.setFontSize(18)
                   ctx.fillText(hhh+':'+hhh1,30,25,e.width/2);


                   ctx.draw(false, () => {
                     uni.canvasToTempFilePath({ //将画布中内容转成图片，即水印与图片合成
                       canvasId: 'firstCanvas',
                       success: (wwwww) => {
                         // that.saveFile(res);
                         this.imgUrl={
                           isChoose: 1,
                           defaultUrl: wwwww.tempFilePath
                         }
                       },
                       fail: (err) => {

                       }
                     })
                   })
                 },1000)
                }
              })
            },
            fail: () => {

            }
          })
          // this.commonPostPolicy()
        }
      })
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
        method: 'GET',
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
    // getStatus(key) {
    //   request({
    //     url: 'student/clock/GetPlan!detail.action',
    //     method: "POST",
    //     data: {
    //       traineeId: this.traineeId
    //     },
    //     cookie: 'JSESSIONID=' + this.sessionId,
    //     addHeader: {
    //       encryptValue: this.encryptValue,
    //       Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'
    //     }
    //   }).then(res => {
    //     if (key == 'getLocation') {
    //       this.lat = res.data.postInfo.lat
    //       this.lng = res.data.postInfo.lng
    //       uni.setStorageSync('user_data', {
    //         openId: this.openId,
    //         unionId: this.unionId,
    //         lat: this.lat,
    //         lng: this.lng,
    //         username: this.username,
    //         password: this.password
    //       })
    //       this.getAdcode()
    //     } else {
    //       let status = res.data.clockInfo.status
    //       this.status = status
    //       console.log(this.status)
    //       if (this.imgUrl.isChoose) {
    //         this.commonPostPolicy()
    //       } else {
    //         if (this.status != 0) {
    //           this.SIGN_IN('student/clock/PostNew.action', this.status)
    //         } else {
    //           this.SIGN_IN('student/clock/PostNew!updateClock.action', '1')
    //         }
    //       }
    //     }
    //
    //   })
    // },
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
  //overflow: hidden;
  padding: 7px;
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