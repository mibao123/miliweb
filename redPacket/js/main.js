//手机号码正则
var reg = new RegExp(/^1[34578]\d{9}$/)
	
//点击注册按钮
//$(dom).unbind("click").click(function(//code))
$(".registerBtn").unbind("click").click(function(){
	var userPhone=$("#phone").val();
	var VerificationCode=$("#VerificationCode").val();
	if(!reg.test(userPhone)){
		addremove('请输入正确的手机号码');
	}else if(VerificationCode==''){
		addremove('验证码不能为空');
	}else{
		$.ajax({
		  	type:"post",
		  	url:"http://newapi.milixiaofei.com/api/login",
		  	data: {'username':userPhone,'smscode':VerificationCode},
		  	success:function(date){
		  		addremove('注册成功');
		  	},
		  	error:function(){
		  		addremove('网络错误');
		  	}
		})
	}
});

//点击获取验证码
$("#Verification").click(function(){
	var userPhone=$("#phone").val();
	if(!reg.test(userPhone)){
		addremove('请输入正确的手机号码');
	}else{
		time(this);
		
	    //请求验证码
		$.ajax({
		  	type:"post",
		  	url:"http://newapi.milixiaofei.com/api/smscode",
		  	data: {'phone':userPhone},
		  	success:function(date){
		  		addremove('获取验证码成功')
		  	},
		  	error:function(){
		  		addremove('获取验证码失败！！');
		  	}
		})
	}
});


//倒计时60s
var wait=60;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");            
        o.value="获取";
        o.style.background='#5f96f3';
        o.style.color='#ffffff';
        wait = 60;
    } else {
        o.setAttribute("disabled", true);
        o.value=wait;
        o.style.background='#cccccc';
        o.style.color='#ff0000';
        wait--;
        setTimeout(function(){
            time(o)
        },
        1000)
    }
};

//弹框动画
function addremove(obj){
	$(".erroTk").addClass('tkanim');
	$(".erroTk").html(obj);
	setTimeout(function(){
		$(".erroTk").removeClass('tkanim').html(' ');
	},3200)
}