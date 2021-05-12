


### 使用方法



1. 引入校验规则模块

    ```
    /****引入公共校验规则模块*****/
    import GlobalRules from '@/config/global_rules'
    ```


2. 表单校验方法中注入规则方法

    ```
    insertFromRules:{
        phone:GlobalRules.rules.phone('请输入手机号'),
        userName:GlobalRules.rules.truename('请输入姓名'),
        status:GlobalRules.rules.inputTakeTextRules('请选择状态'),
    },
    ```
    