// pages/component/listDemo/listDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据源
    carList: null,
    currentPage: 0,
    noSource: true,
    loadFinish: false,
  },

  noSourceClick(){
    console.log('暂无数据')
  },

  noNetClick(){
    console.log('暂无网络')
  },

  loadRequest(reload) {

    if (!reload &&
      this.data.loadFinish) {
      return;
    }

    // 显示顶部刷新图标
    wx.showLoading({
      title: '加载中…',
      mask: true
    });

    setTimeout(() => {

      if (reload) {
        this.data.currentPage = 0
        this.setData({
          carList: require('./carList.js').carList,
          loadFinish: false,
        });
        // 停止下拉动作
        wx.stopPullDownRefresh();
      } else {

        this.data.currentPage++

        var moreArr = require('./carList.js').carList
        
        if (moreArr.length > 0) {
          moreArr = this.data.carList.concat(moreArr)
          this.setData({
            carList: moreArr,
          });
        } else {
          this.data.currentPage--
        }

        if (this.data.currentPage == 2) {
          this.setData({
            loadFinish: true,
          });
        } else {
          this.setData({
            loadFinish: false,
          });
        }
      }

      wx.hideLoading()

      this.checkSource()

    }, 2000);
  },

  checkSource() {
    this.setData({
      noSource: this.data.carList.length == 0,
    });
  },

  // 下拉刷新
  onPullDownRefresh: function () {
    this.loadRequest(true);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadRequest(false);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.startPullDownRefresh()
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})