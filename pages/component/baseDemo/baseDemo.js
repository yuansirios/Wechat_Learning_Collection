// pages/component/baseDemo/baseDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "Hello World!!!",
    theName: "Jack",
    flag: false,
    items: [{
        "name": "商品1"
      },
      {
        "name": "商品2"
      },
      {
        "name": "商品3"
      },
      {
        "name": "商品4"
      },
      {
        "name": "商品5"
      },
    ],
    condition:Math.floor(Math.random()*3+1),
    userInfo:{
      name:"yuan",
      phone:18888888888,
      address:"中国"
    },
  },

  clickMe(e) {
    console.log(e);
    wx.showToast({
      title: '点我干哈',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: true
    });

  },
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