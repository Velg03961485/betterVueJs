


#### 使用方式

1.  注入方法

    ```
    // 截流函数-防止用户多次触发点击
    import throttle from "@/utils/throttle.js"
    ```

2.  使用

    ```
    sure:throttle.throttle(function(dialog){
			
    },3000),
    ```