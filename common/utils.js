
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

function showToast(title) {
    wx.showToast({
        title: title,
        icon: 'none',
        image: '',
        duration: 1500,
        mask: true,
    });
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