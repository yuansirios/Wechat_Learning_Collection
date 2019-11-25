
// 保存，获取，删除数据
function saveData(key, data) {
    wx.setStorageSync(key, data);
}

function getData(key) {
    return wx.getStorageSync(key);
}

function removeData(key) {
    wx.removeStorageSync(key);
}

// 弹出toast
function showToast(title) {
    wx.showToast({
        title: title,
        icon: 'none',
        image: '',
        duration: 1500,
        mask: true,
    });
}

// 生成随机颜色
function getRandomColor (){
    //生成随机颜色值
    var colorStr = Math.floor(Math.random()*0xFFFFFF).toString(16);
    //返回格式化的颜色字符串
    return '#'+'000000'.substring(0,6-colorStr)+colorStr;
}

function showModal(title,confirmText,cancelText,result){
    wx.showModal({
        title: title,
        content: '',
        showCancel: true,
        cancelText: cancelText?cancelText:null,
        cancelColor: '#000000',
        confirmText: confirmText?confirmText:null,
        confirmColor: '#3CC51F',
        success:result
    });
}

module.exports = {
    saveData: saveData,
    getData: getData,
    removeData: removeData,
    showToast:showToast,
    showModal:showModal
};