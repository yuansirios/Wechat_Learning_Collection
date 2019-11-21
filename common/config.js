
const LOGIN_FLAG = 'loginFlag'; //登录标识
const USER_INFO = 'userInfo';   //用户信息

const baseUrl = 'https://strsdev.lemonev.com:8101';
const testUrl = baseUrl + '/strs/api/cardealer/vehicleTypeList';
const fileUploadUrl = baseUrl + '/strs/plutus/uploadImage';

module.exports = {
    LOGIN_FLAG:LOGIN_FLAG,
    USER_INFO:USER_INFO,
    testUrl:testUrl,
    fileUploadUrl:fileUploadUrl
};