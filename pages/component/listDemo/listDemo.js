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

  noSourceClick() {
    console.log('暂无数据')
  },

  noNetClick() {
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

    let that = this;

    setTimeout(() => {

      console.log(reload?'重新加载':'加载下一组');

      if (reload) {
        that.setData({
          carList: require('./carList.js').carList,
          loadFinish: false,
          currentPage: 0
        });
        // 停止下拉动作
        wx.stopPullDownRefresh();
      } else {
        var moreArr = require('./carList.js').carList

        let page = that.data.currentPage;

        if (moreArr.length > 0) {
          moreArr = that.data.carList.concat(moreArr)
          that.setData({
            carList: moreArr,
            currentPage: (page + 1)
          });
        } else {
          that.setData({
            currentPage: (page - 1)
          });
        }

        if (that.data.currentPage == 2){
          that.setData({
            loadFinish: true,
          });
        }else{
          that.setData({
            loadFinish: false,
          });
        }
      }

      wx.hideLoading()

      that.checkSource()

      console.log('刷新了第 ' + that.data.currentPage + ' 组数据');

    }, 2000);
  },

  checkSource() {
    this.setData({
      noSource: this.data.carList.length == 0,
    });
  },

  // 下拉刷新
  onPullDownRefresh: function () {
    console.log('.....onPullDownRefresh.....');
    this.loadRequest(true);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('.....onReachBottom.....');
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