// pages/component/navigatorTest/navigatorTest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //名称前是否带 loading 图标
    "loading": false,
    //按钮是否镂空，背景色透明
    "plain": true,
    "reData": null
  },

  /**
   * 跳转页面
   */
  pushView() {
    console.log("跳转页面");
    wx.navigateTo({
      url: '../../detail/detail?arg1=123&arg2=456',
    });
  },

  // 该方法会销毁当前的页面，然后再跳转
  redirectToA() {
    wx.redirectTo({
      url: '../../detail/detail?arg1=123&arg2=456',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '组件示例'
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
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    let json = currPage.data.reData;
    console.log("reData:", json) //为传过来的值
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