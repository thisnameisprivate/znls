// 引入Vant官方提供的默认省市区数据
import {areaList} from "area-data"
// 获取应用实例
const app = getApp()
Page({
    onShow: function () {
      this.getTabBar().init();
    },
    data: {
      areaList,
      canIUse: wx.canIUse('button.open-type.getUserInfo'), // 兼容模式
      userInfo: {},
      hasUserInfo: false,
      canIUseGetUserProfile:false,
      canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
      loading: true,
      show:false, // 是否显示底部弹出层
      /**
       * 轮播图属性
       */
      background: ['/images/advertsing01.jpg', '/images/advertsing02.jpg'],
      indicatorDots: false,
      autoplay: true,
      interval: 2000,
      duration: 500,
    },
    onLoad: function () {
        if (wx.getUserProfile) {
          this.setData({
            canIUseGetUserProfile: true,
            loading:false,
          })
        }
    },
    getUserProfile (e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户格人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复调用
      wx.getUserProfile ({
        desc: "个人信息授权", // 声明获取用户个人信息后的用途， 后续会展示在弹窗中， 请谨慎填写
        success: (res) => {
          console.log(rss)
          this.setData({
            userInfo:res.userInfo,
            hasUserInfo:true,
          })
        }
      })
    },
    // 新增地址弹出层
    showPopup: function () {
      console.log("click showPopup")
      this.setData({
        show:true,
      })
    },
    // 弹出层关闭
    onClose: function () {
      this.setData({
        show:false,
      })
    }
})