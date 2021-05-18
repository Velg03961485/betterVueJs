


### 使用方法


1. 在element-UI 的时间组建中，添加:picker-options="pickerOptionsSet"


2. 在data中写入方法

    
3. 这里方法有三种

    第一种：限制时间只能选择今天之前/今天之后（包含今天）

    ```
    pickerOptionsSet: {
        disabledDate(time) {
            return time.getTime() > Date.now();
            // return time.getTime() < Date.now() - 8.64e7;
            // return time.getTime() ;
        }
    },
    ```


    第二种：限制时间只能选择一个时间范围内

    ```
    pickerOptionsSetOne:{
        disabledDate(time) {
            let _now = Date.now(),
                seven = 30 * 24 * 60 * 60 * 1000,
                sevenDays = _now - seven;
            return time.getTime() > _now || time.getTime() < sevenDays;
        }
    },
    ```



    第三种：限制开始时间小于结束时间

    ```
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
    ```
    