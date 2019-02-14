import api from './api';
export default (iv, encryptedData) => {
    return new Promise( (resolve, reject) => {
        wx.login({
            success: (loginRet) => {
                wx.request({
                    url: api.api_.login,
                    method: 'POST',
                    dataType:'json',
                    data: {
                        iv : iv,
                        encryptData : encryptedData,
                        code : loginRet.code
                    },
                    success: (res) => {
                        resolve(res)
                    },
                    fail: (err) => {
                        reject(err)
                    }
                })
            }
        })
    })
}