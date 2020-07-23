<template>
    <div>
        <div class="content">
            <form action="loginForm">
            <div class="log">
                <div class="user"><div>用户名:</div><input v-model="user" placeholder="用户名"></div>
                <div class="phone"><input v-model="loginForm.mobile" type="phone"  placeholder="请输入手机号"></div>
                <div class="code"><input v-model="loginForm.code" type="text" placeholder="请输入验证码"><button @click="getTime">{{codetime}}</button></div>
            </div>
            <div class="btn" style="overflow: hidden;">
                <div><button type="default" size="20">取消</button></div>
                <div> <button type="primary" size="10" @click="isok" form-type="submit">确定</button></div>
            </div>
            </form>
        </div>
    </div>
</template>
<script>
import request from'../../../utils/request'
export default {
    data() {
        return {
            codetime:'发送验证码',
            close:"",
            // 表单数据对象
         loginForm: {
          user:'',
          mobile: '',
          code: ''
      },
        }
    },
    methods: {
       //获取验证码
	getcode:function(){
		var that = this;
		that.setData({
			codetime:60,
			close: setInterval(that.gettime, 1000)
		});
	},
	gettime:function(){
		var that = this;
		if (that.data.codetime == 0) {
			//清除js定时器  
			clearInterval(that.data.close);
			that.setData({
				codetime: "获取验证码",
			});
		} else {
			that.setData({
				codetime: --that.data.codetime,
			});
		}
    },
        isok(){
         
        },
    },
}
</script>
<style lang="less">
body {
    background-color: #eee;
}
.content{
    width: 300px;
    height: 400px;
    margin: 50px auto;
    background-color: #ddd;
}
.log{
    overflow: hidden;
    
}
.user div {
    margin: 20px 10px;
    line-height: 50px;
    float: left;
}
.user input {
        margin: 20px 10px;
    float: left;
    width: 200px;
    height: 50px;
    border: solid 1px #aaa;
}
.phone {
        margin: 0px 10px;
    float: left;
    width: 280px;
    height: 50px;
        border: solid 1px #aaa;

}
.code input{
        margin: 20px 10px;
     float: left;
    width: 150px;
    height: 50px;
        border: solid 1px #aaa;
}
.code button {
        margin: 20px 10px;
    float: left;
    width: 110px;
    height: 50px;
    font-size: 16px;
}
    .btn-yz input{
        margin-right: 10px;
        width: 140px;
        height: 50px;
        border: solid 1px #ccc;
    }
    .btn-yz div{
        // vertical-align :center;
        margin: 10px 10px;
        height: 50px;
        float: left;
        width: 100px;
    }
    .yzm .yz{
        float: left;
    //    width: 100px;
        height: 50px;
        font-size: 16px;
    }
    .btn div{
        margin: 20px 10px;
        height: 50px;
        float: left;
        width: 130px;
    }
</style>