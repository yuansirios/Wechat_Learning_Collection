Page({

  /**
   * 页面的初始数据
   */
  data: {
    "arg1": "",
    "arg2": ""
  },

  goBackWithArgs(){
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面
    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      reData: {
        key:"detail返回的数据"
      }
    })
    wx.navigateBack(
      {
        delta:1,
      }
    );
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("detail的参数：", options);
    this.setData({
      "arg1": options.arg1,
      "arg2": options.arg2,
    });

    wx.setNavigationBarTitle({
      title: '详情'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("detail onReady,参数是：", this.data.arg1, this.data.arg2);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("detail onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})