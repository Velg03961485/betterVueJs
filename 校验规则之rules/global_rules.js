const rules={


		//姓名验证
		truename(){
			return [
	    		{ required: true, message: '请输入姓名', trigger: 'blur' },

	        	{
	                validator: (rule, value, callback) => {
                    if (value.match(/^[\u4E00-\u9FA5·]{1,}$/)){
                      callback();
                    } else {
                      callback("请输入正确的名字");
                    }
	                	},
	                	trigger: 'blur'
	            	}
	    	]
		},


		idCardRules(){
			return [
				{required: true,message: '请输入身份证'},
				{validator: (rule, value, callback) => {
					let re = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
					if(re.test(value)) {
					  callback();
					} else {
					  callback("请输入合法身份证")
					}
				  },
				  trigger: 'blur'
				}
			]
		},

		amountRules(){
			return [
				{ required: true, message: '请输入贷款金额', trigger: 'blur' },
				  {
					validator: (rule, value, callback) => {
						if (value < 1 || value > 50 || isNaN(value)) {
							callback('请输入正确的贷款金额！')
						} else if (typeof parseInt(value) !== 'number') {
							callback('请输入数字')
						} else {
							callback()
						}
					},
					trigger: 'blur'
				}
			]
		},

		periodRules(){
			return [
				{ required: true, message: '请输入贷款期限', trigger: 'blur' },
				  {
					validator: (rule, value, callback) => {
							if (value < 1 || value > 36 || isNaN(value)) {
								callback('请输入正确的贷款期限！')
							} else if (typeof parseInt(value) !== 'number') {
								callback('请输入数字')
							} else {
								callback()
							}
					},
					trigger: 'blur'
				}
			]
		},

		revenueRules(){
			return [
				{ required: true, message: '请输入月均收入', trigger: 'blur' },
				  {
					validator: (rule, value, callback) => {
						if (value > 50000 || value < 1500 || isNaN(value)) {
							callback("请输入正确的月均收入！");
						  } else if (typeof parseInt(value) !== "number") {
							callback("请输入数字");
						  } else {
							callback();
						  }
					},
					trigger: 'blur'
				}
			]
		},

        //密码验证
		password() {
			 return [
		        { required: true, message: '请输入密码', trigger: 'blur' },
		        { validator:(rule,value,callback) =>{
                if(value.match(/^[a-zA-Z0-9^·%&'.!@#*()_+\[\]~`\\{}\-:'"<>/,;=?$\x22]{6,16}$/)){
                  callback();
                }else if(value.match(/^\s*|\s*$/)){
                  callback("除空格外数字,字母和任意字符6-16位")
                }
	        		},
	        		trigger:'blur'
		        }
			]
		},

		repassword(pwd) {
			 return [
		        { required: true, message: '请输入密码', trigger: 'blur' },
		        {
			        validator: (rule, value, callback) => {
			             if (value !== pwd) {
			             	console.log(pwd)
			                    callback('两次输入密码不一致!');
			               } else {
			                    callback();
			                }
			            },
			         trigger: 'blur'
			    }
			]
		},

        //手机号验证
		phone(){
			return [
	        		{ required: true, message: '请输入手机号', trigger: 'blur' },
	          		{
	                	validator: (rule, value, callback) => {
		                    if (value.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)){
		                        callback();
		                    } else {
		                        callback("请输入正确的手机号");
		                    }
	                	},
	                	trigger: 'blur'
	            	}
	        	]
		},
  //验证码验证
      code(){
		  return[
             { required: true, message: '请输入验证码', trigger: 'blur' },
         ]
        },

		//select选择器验证
		selectRule(text){
			return [
			    { required: true, message: text, trigger: 'change' }
			]

		},




//      公共提示请完成输入 验证规则
    inputTakeTextRules(text){
      return[
        { required: true, message: text, trigger: 'blur' },
		{ required: true, message: text, trigger: 'change' }
      ]
    },

//  邮箱验证
  checkEmailRules(){
		  return [
        {required: true,message: '请输入邮箱'},
        {validator: (rule, value, callback) => {
            if(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value)) {
              callback();
            } else {
              callback("请输入合法邮箱")
            }
          },
          trigger: 'blur'
        }
      ]
  },




}

export default {
  rules
}
