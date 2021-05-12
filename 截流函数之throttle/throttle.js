/*
 * @Author: velg 
 * @Date: 2021-04-16 14:04:29 
 * @Last Modified by:   velg 
 * @Last Modified time: 2021-04-16 14:04:29 
 */
 // 函数节流限制-防止多次点击造成页面连续跳转

  export default {
    throttle(fn, gapTime) {
        if (gapTime == null || gapTime == undefined) {
          gapTime = 1500
        }
      
        let _lastTime = null
      
        // 返回新的函数
        return function () {
          let _nowTime = + new Date()
          if (_nowTime - _lastTime > gapTime || !_lastTime) {
            fn.apply(this, arguments)   //将this和参数传给原函数
            _lastTime = _nowTime
          }
        }
      }
  }