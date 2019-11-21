// 组件演示列表

var utils = require('../../common/utils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        "title": "导航示例",
        "component": "./navigatorTest/navigatorTest"
      },
      {
        "title": "布局示例",
        "component": "./layoutview/layoutview"
      },
      {
        "title": "switchTab",
        "component": "switchTab"
      },
      {
        "title": "登录授权示例",
        "component": "./loginAuthDemo/loginAuthDemo"
      },
      {
        "title": "扫码识别示例",
        "component": "扫码识别示例"
      },
      {
        "title": "JSON和对象互转",
        "component": "JSON和对象互转"
      },
      {
        "title": "表单示例",
        "component": "./formDemo/formDemo"
      },
      {
        "title": "列表示例",
        "component": "./listDemo/listDemo"
      }
    ]
  },

  turnToDemo: function (e) {
    let that = this;
    var component = e.currentTarget.dataset.component;

    if (component === 'switchTab') {
      that.switchTab();
    } else if (component === '扫码识别示例') {
      that.getQRCode();
    } else if (component === 'JSON和对象互转') {
      that.jsonToObject();
    } else {
      wx.navigateTo({
        url: component,
      });
    }

    console.log('>>> 跳转：' + component);
  },

  /**
   * 切换到我的
   * 这种方式用于跳转到tabbar页面，调用此方法，
   * 会先销毁当前存在的非tabbar的页面，然后再跳转，
   * 也就是说，使用该方法后，首页会发生改变。
   */
  switchTab() {
    wx.switchTab({
      url: '../mine/mine',
    })
  },

  // 扫码识别示例
  getQRCode() {
    let that = this;
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode', 'barCode', 'datamatrix', 'pdf417'],
      success: (res) => {
        console.log(res);    //输出回调信息
        let title = '识别成功：' + res.result;
        utils.showModal(title, '确认', '取消', (res) => {
          if (res.confirm) {
            console.log('点击确认');
          }
        });
      },
      fail: () => { },
      complete: () => { }
    });
  },

  // JSON和对象互转
  jsonToObject() {
    //这是一个json对象
    var jsonobj = { "id": "330890811", "time": "2018-5-7 08:00:36" };
    //json对象转成json字符串（同普通js中相同）
    var jsonstr = JSON.stringify(jsonobj)
    console.log("json字符串：" + jsonstr)

    //由json字符串转成json对象，eval()函数在小程序用不了，被小程序禁用了
    var obj = JSON.parse(jsonstr); //可用此方法来转换
    console.log("json对象:" + JSON.stringify(obj))
    console.log("id:" + obj.id)
    console.log("time:" + obj.time)
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

  },
})