let format = (value) => {
  return value >= 10 ? value : '0' + value
}
/**
 * 时间格式化
 */
export const dateFilter = (time, type) => {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let second = date.getSeconds()
  let result
  switch (type) {
    case 0: // 01-05
      result = `${(month)}月${format(day)}日`
      break
    case 1: // 11:12
      result = `${format(hours)}:${format(minutes)}:${format(second)}`
      break
    case 2: // 2015-01-05
      result = `${year}-${format(month)}-${format(day)}`
      break
    case 3: // 2015-01-05 11:12
      result = `${year}.${format(month)}.${format(day)}  ${format(hours)}:${format(minutes)}`
      break
    case 4:// 2015-01-05 11:12:06
      result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}:${format(second)}`
      break
    case 5:// Jan 05, 2015 11:12:06
      result = date.format('M dd, yyyy HH:mm:ss')
      break
    case 6:// Jan 05, 2015
      result = date.format('M dd, yyyy')
      break
    case 7:// Jan 05, 2015
      result = `${year}年${format(month)}月${format(day)}日  ${format(hours)}:${format(minutes)}`
      break
  }
  return result
}

Date.prototype.format = function (mask) {
  var d = this
  var zeroize = function (value, length) {
    if (!length) {
      length = 2
    }
    value = String(value)
    for (var i = 0, zeros = ''; i < (length - value.length); i++) {
      zeros += '0'
    }
    return zeros + value
  }
  return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let monthsAll = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    switch ($0) {
      case 'd': return d.getDate()
      case 'dd': return zeroize(d.getDate())
      case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()]
      case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()]
      case 'M': return months[d.getMonth()]
      case 'MM': return zeroize(d.getMonth() + 1)
      case 'MMM': return months[d.getMonth()]
      case 'MMMM': return monthsAll[d.getMonth()]
      case 'yy': return String(d.getFullYear()).substr(2)
      case 'yyyy': return d.getFullYear()
      case 'h': return d.getHours() % 12 || 12
      case 'hh': return zeroize(d.getHours() % 12 || 12)
      case 'H': return d.getHours()
      case 'HH': return zeroize(d.getHours())
      case 'm': return d.getMinutes()
      case 'mm': return zeroize(d.getMinutes())
      case 's': return d.getSeconds()
      case 'ss': return zeroize(d.getSeconds())
      case 'l': return zeroize(d.getMilliseconds(), 3)
      case 'L': var m = d.getMilliseconds()
        if (m > 99) m = Math.round(m / 10)
        return zeroize(m)
      case 'tt': return d.getHours() < 12 ? 'am' : 'pm'
      case 'TT': return d.getHours() < 12 ? 'AM' : 'PM'
      case 'Z': return d.toUTCString().match(/[A-Z]+$/)
      // Return quoted strings with the surrounding quotes removed
      default: return $0.substr(1, $0.length - 2)
    }
  })
}
//保留两位小数,四舍五入
export const numberFilter = (value) => {
  let realNum = Number(value).toFixed(2);
  return realNum;
}

//保留两位小数，不进行四舍五入
export const numbersFilter = (value) =>{
  let transtnum = Number(value).toFixed(3);
  let realVal = transtnum.substring(0, transtnum.length - 1);
  // return Number(realVal);
  return realVal;
}

//数字数字大于亿用亿表示
export const hundredMillion = (value) =>{
	 let val;
   if(value >= 100000000){
   	val =  "约" + (value / 100000000).toFixed(3).slice(0,-1) + '亿';
   }else{
   	val = value;
   }
  return val;
}

//数字千分位用逗号隔开展示
export const numThousand = (value) =>{
  let res = value.toString().replace(/\d+/, function(n) { // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
      return $1 + ","
    });
  })
  return res
}
//文本过滤长度以及标签
export const fontFilter = (value,num) =>{
  let text = '';
  if(value === ''){
    text = '--';
  }else{
    if(value.length > num){
      value = value.replace(/<[^>]+>/gim, '');
      value = value.substr(0, num)
      text = value + ('...');
    }else{
      text = value;
    }

  }

  return text;
}

//字数长度过滤
export const fontNumberFilter = (value,num) =>{
  value = value.substr(0, num)
  return value + ('...');
}

//优惠券名称过滤
export const cardNameLength = (value,num) => {
  let text = '';
  if(value.length >= num){
    value = value.replace(/<[^>]+>/gim, '');
    value = value.substr(0, num)
    text = value + ('...');
  }else{
    text = value;
  }
  return text;
};






//复填下拉的时候，返回的id为 数字的时候，进行转字符串操作
export const stringNumber = (value) =>{
  let val;
  val = value.toString();
  return val;
};













//空数据转换
export const nullTextChange = (value) =>{
  let text = '';
  if(value === '' || value === null || value === undefined){
    text = '-';
  }else {
    text = value;
  }
  return text;
}










//时间换行过滤
export const timeChangeLine = (value) =>{
  let text = '';
  if(value === '' || value === null || value === undefined){
    text = '/';
  }else{
    text = value.split(' ')[0] + '<br/>' + value.split(' ')[1]
  }
  return text;
}



//时间转化为周显示过滤器
export const timeChangeWeek = (value) =>{
  let text = '';
  if(value === '' || value === null || value === undefined ){
    text = '/';
  }else{
    let weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    let myDate = value;
    text = weekDay[myDate.getDay()];
  }
  return text;
}




// 钱数自动转换为百分位
export const moneyChangeTxt = (value) =>{
  let text = 0;
  if(value === '' || value === null || value === undefined){
    text = 0;
  }else{
    text = ( parseFloat(value) / 100).toFixed(2)
  }
  return text;
}



