/*
  封装通用的接口调用方法
*/
export default (path, param) => {
  return new Promise((resolve, reject) => {
    // 处理异步任务：调用接口
    let baseUrl = `192.168.0.1:443/api/v1/${path}`
    wx.request({
      url: baseUrl,
      data: param,
      success: (res) => {
        if (res.code === 200) {
          // 处理响应结果
          resolve(res.message)
        } else {
          reject('服务器发生错误')
        }
      }
    })
  })
}