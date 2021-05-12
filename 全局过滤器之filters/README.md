


####  使用

1. mian.js 全局注册

    ```
    import * as filters from './filters'

    //使用到哪种方法，需要在注册一下
    Vue.filter('date', filters.dateFilter)
    ```

2. 直接就可以在页面中调用过滤方法

    ```
    <el-table-column  label="更新时间" align="center" width="180px">
        <template slot-scope="scope">
            <span>{{scope.row.updateTime | date(4)}}</span>
        </template>
    </el-table-column>
    ```
    