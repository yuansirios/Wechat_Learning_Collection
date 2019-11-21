/**
 * POST请求
 * @param {地址} url 
 * @param {参数} params 
 * @param {开始回调} onStart 
 * @param {结束回调} onResponse 
 */
function post(url, params, onStart, onResponse) {
    request(url, params, "POST", onStart, onResponse);
}

/**
 * GET请求
 * @param {地址} url 
 * @param {参数} params 
 * @param {开始回调} onStart 
 * @param {结束回调} onResponse 
 */
function get(url, params, onStart, onResponse) {
    request(url, params, "GET", onStart, onResponse);
}

/**
 * 文件上传
 * @param {地址} url 
 * @param {文件地址} filePath 
 * @param {开始回调} onStart 
 * @param {结束回调} onResponse 
 */
function fileUpload(url, filePath, formData, onStart, onResponse) {
    console.log('请求Url:' + url)
    console.log('请求filePath:' + filePath)
    console.log('请求参数:' + JSON.stringify(formData))

    onStart();
    wx.uploadFile({
        url: url,
        filePath: filePath,
        name: 'image',
        formData: formData,
        header: headerParams(),
        success: (res) => {
            console.log('请求结果:' + JSON.stringify(res))
            let data = JSON.parse(res.data);
            if (data.success === 'true') {
                onResponse(true, data.body)
            } else {
                onResponse(false, data.errMsg)
            }
        },
        fail: (error) => {
            console.log(error)
            onResponse(false, "网络请求失败")
        }
    });
}

/**
 * function: 封装网络请求
 * @url URL地址
 * @params 请求参数
 * @method 请求方式：GET/POST
 * @onStart 开始请求,初始加载loading等处理
 * @onSuccess 成功回调
 * @onFailed  失败回调
 */
function request(url, params, method, onStart, onResponse) {
    console.log('请求Url:' + url)
    console.log('请求参数:' + JSON.stringify(params))
    console.log('请求类型:' + method)
    onStart();
    wx.request({
        url: url,
        data: dealParams(params),
        method: method,
        header: headerParams(),
        success: function (res) {
            console.log('请求结果:' + JSON.stringify(res))
            let data = res.data;
            if (data.success === 'true') {
                onResponse(true, data.body)
            } else {
                onResponse(false, data.errMsg)
            }
        },
        fail: function (error) {
            console.log(error)
            onResponse(false, "网络请求失败")
        }
    })
}

/**
 * function: 根据需求处理请求参数：添加固定参数配置等
 * @params 请求参数
 */
function dealParams(params) {
    return params;
}

/**
 * header参数
 */
function headerParams() {
    return { 'content-type': 'application/json', "token": 'A317C268F171C2F829C2432435895EBB' };
}

module.exports = {
    postRequest: post,
    getRequest: get,
    fileUpload: fileUpload
}