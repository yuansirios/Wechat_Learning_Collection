// pages/component/formDemo/formDemo.js
var utils = require('../../../common/utils.js');
var network = require('../../../common/network.js');
var config = require('../../../common/config.js');

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    account: null,
    password: null,
    checkList: [
      { 'name': '1','value':"红色" },
      { 'name': '2','value':"蓝色" },
      { 'name': '3','value':"绿色" },
    ]
  },

  // 账号输入
  inputAccount: function (e) {
    let value = e.detail.value;
    this.setData({
      account: value
    })
  },

  inputPassword(e) {
    let value = e.detail.value;
    this.setData({
      password: value
    })
  },

  // 用户登录
  login() {
    if (this.data.account && this.data.password) {
      let msg = '账户1：' + this.data.account + '\n密码：' + this.data.password;
      utils.showToast(msg)
    } else {
      utils.showToast('账号或密码为空！')
    }

    let params = {
      "page": 1,
      "pageSize": 10
    }

    network.postRequest(config.testUrl, params, () => {
      wx.showLoading({
        title: '正在加载',
      })
    }, (isSuccess, res) => {
      wx.hideLoading();
      if (isSuccess) {
        utils.showToast(JSON.stringify(res))
      } else {
        utils.showToast(res)
      }
    });
  },

  /**
   * 文件上传示例
   */
  fileUpload() {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {

        let filePath = result.tempFilePaths[0]

        network.fileUpload(config.fileUploadUrl, filePath, null, () => {
          wx.showLoading({
            title: '正在上传',
          })
        }, (isSuccess, res) => {
          wx.hideLoading();
          if (isSuccess) {
            utils.showToast('上传成功')
            console.log(res.resultUrl)
          } else {
            utils.showToast(res)
          }
        });
      },
      fail: () => { },
      complete: () => { }
    });
  },

  /**
   * 复选框示例
   */
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  /**
   * 单选框示例
   */
  radioChange: function (e) {
    console.log('radioBox发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getUserInfo((res) => {
      console.log(res.avatarUrl);
      this.setData({
        userInfo: app.globalData.userInfo
      })
    });
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