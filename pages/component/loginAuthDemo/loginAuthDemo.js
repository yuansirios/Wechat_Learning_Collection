// pages/component/loginAuthDemo/loginAuthDemo.js

var constData = require('../../../common/config.js');
var utils = require('../../../common/utils.js');

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    errMsg: "",
    hasLogin: false
  },

  // 检测登录状态
  checkLoginStatus: function () {
    let that = this;

    that.setData({
      hasLogin: utils.getData(constData.LOGIN_FLAG)
    });

    if (that.data.hasLogin) {
      console.log('已经登录，获取用户信息……');
      app.getUserInfo((res) => {
        console.log('获取用户信息成功……');
        that.setData({
          userInfo: res
        });
      });
    } else {
      console.log('没有登录，退出……');
      that.logOut();
    }
  },

  // 登录操作
  doLogin(res) {

    let that = this;

    if (res.detail.errMsg === 'getUserInfo:ok') {

      wx.showLoading({
        title: '登录中…',
        mask: true
      });

      setTimeout(function () {
        wx.hideLoading();

        let rawData = res.detail.rawData;             //用户非敏感信息
        let signature = res.detail.signature;         //签名
        let encryptedData = res.detail.encryptedData; //用户敏感信息
        let iv = res.detail.iv;                       //解密算法的向量

        app.getUserInfo(() => {

          console.log('<<<<<< 授权成功 >>>>>>');
          console.log('rawData：' + rawData);
          console.log('signature：' + signature);
          console.log('encryptedData' + encryptedData);
          console.log('iv' + iv);

          that.saveLoginInfo();
        });

      }, 2000)
    } else {
      that.setData({
        errMsg: '授权失败'
      });
      utils.showToast(that.errMsg);
    }
  },

  logOut() {
    utils.removeData(constData.LOGIN_FLAG);

    this.setData({
      errMsg: null,
      hasLogin: false,
      userInfo: {}
    });
  },

  saveLoginInfo() {
    utils.saveData(constData.LOGIN_FLAG, true);
    
    this.setData({
      errMsg: null,
      hasLogin: true,
      userInfo: app.globalData.userInfo
    });
    
  },

  /*
  //检查用户信息授权设置
  checkUserInfoPermission(callback) {
    let that = this;

    var msg = '';

    wx.getSetting({

      success: (result) => {

        if (!result.authSetting['scope.userInfo']) {
          msg = '用户未设置授权，打开设置失败'
          that.freshData(msg);
          typeof callback == "function" && callback(false)
        } else {
          msg = '用户已经设置授权'
          typeof callback == "function" && callback(true)
          that.freshData(msg);
        }
      },
      fail: (e) => {
        typeof callback == "function" && callback(false)
        msg = '获取授权设置失败'
        that.freshData(msg);
      }
    }
    );
  },

  //打开授权
  openSetting(callback) {
    wx.openSetting({
      success: (result) => {
        callback(true)
      },
      fail: (e) => {
        console.log(e);
        console.log('打开授权失败');
        callback(false)
      }
    });
  },

  freshData(msg) {
    this.setData({
      errMsg: msg
    });
  },
  */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.checkLoginStatus();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})