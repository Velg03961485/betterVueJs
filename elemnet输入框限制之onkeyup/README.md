


#### 方法及使用


1. 输入框只能输入数字：

```
<el-input onkeyup="this.value=this.value.replace(/[^\d.]/g,'');" v-model="form.num2"></el-input>
```

2. 只能输入数字和英文逗号

```
<input type="text"  onkeyup="this.value=this.value.replace(/[^\d\,]/g,'')"></input>
```

3. 文本框只能输入数字代码(小数点也不能输入)

```
<input onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
```

4. 只能输入数字,能输小数点

```
<input onkeyup="if(isNaN(value))execCommand('undo')" onafterpaste="if(isNaN(value))execCommand('undo')">
<input name="txt1" οnchange="if(/\D/.test(this.value)){alert('只能输入数字');this.value='';}">
```

5. 数字和小数点方法二

```
<input type="text" t_value="" o_value="" onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" οnblur="if(!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))this.value=this.o_value;else{if(this.value.match(/^\.\d+$/))this.value=0+this.value;if(this.value.match(/^\.$/))this.value=0;this.o_value=this.value}">
```

6. 只能输入字母和汉字

```
<input onkeyup="value=value.replace(/[\d]/g,'') " onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[\d]/g,''))" maxlength="10" name="Numbers">
```

7. 只能输入英文字母和数字,不能输入中文

```
<input onkeyup="value=value.replace(/[^\w\.\/]/ig,'')">
```

8. 只能输入数字和英文

```
<font color="Red">chun</font>
<input onkeyup="value=value.replace(/[^\d|chun]/g,'')">
```

9. 小数点后只能有最多两位(数字,中文都可输入),不能输入字母和运算符号:

```
<input onkeypress="if((event.keyCode<48 || event.keyCode>57) &amp;&amp; event.keyCode!=46 || /\.\d\d$/.test(value))event.returnValue=false">
```

10. 小数点后只能有最多两位(数字,字母,中文都可输入),可以输入运算符号:

```
<input onkeyup="this.value=this.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3')">
```

11. 输入中文:

```
<input type="text" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')"> 
```

12. 输入数字:

```
<input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')"> 
```

13. 输入英文:

```
<input type="text" onkeyup="this.value=this.value.replace(/[^a-zA-Z]/g,'')"> 
```

14. 三个合在一起

```
<input onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')">
```

15. 只输入数字和字母

```
<input class="input" maxlength="12" size="15" name="username" id="username" οnkeyup="value=value.replace(/[\W]/g,'')">
```

16. 除了英文的标点符号以为 其他的人都可以中文，英文字母，数字，中文标点

```
<input type="text" onkeyup="this.value=this.value.replace(/^[^!@#$%^&amp;*()-=+]/g,'')">
```


17. 只能输入中文

```
<input id='txt' οnkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" >
```


18. 只能输入数字

```
<input οnkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
```
