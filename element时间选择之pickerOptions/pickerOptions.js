
/*****
 * 
 * <el-date-picker
        :picker-options="pickerOptionsSet"
        v-model="searchList.startTime"
        value-format="yyyy-MM-dd"
        type="date"
        placeholder="选择开始时间" style="width: 100%" clearable>
    </el-date-picker>
 * 
 * 
 * ****/ 



    
    

      export default {
          data(){
              return{
                  // 常规
                pickerOptionsSet: {
                    disabledDate(time) {
                      return time.getTime() > Date.now();
                      // return time.getTime() < Date.now() - 8.64e7;
                      // return time.getTime() ;
                    }
                },

                // 限制开始时间和结束时间
                pickerOptionsSetOne:{
                    disabledDate(time) {
                      let _now = Date.now(),
                          seven = 30 * 24 * 60 * 60 * 1000,
                          sevenDays = _now - seven;
                      return time.getTime() > _now || time.getTime() < sevenDays;
                    }
                  },


                //   开始时间小雨结束时间
                pickerOptions0: {
                    disabledDate: (time) => {
                        if (this.value2 != "") {
                            return time.getTime() > Date.now() || time.getTime() > this.value2;
                        } else {
                            return time.getTime() > Date.now();
                        }
        
                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.value1 || time.getTime() > Date.now();
                    }
                }



              }
          },
      }