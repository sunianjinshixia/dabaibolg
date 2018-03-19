/**
 * Created by KING on 2017/8/6.
 */

$(function () {
    var $loginBox = $('#loginBox');  //登录
    var $registerBox = $('#registerBox');  //注册
    
    $loginBox.find('a').on('click',function () {
        $registerBox.show();
        $loginBox.hide();
    })
    
    $registerBox.find('a').on('click',function () {
        $loginBox.show();
        $registerBox.hide();
    })
    
    //注册
    $registerBox.find('input.submitBtn').on('click',function () {
        $.ajax({
            url:'/api/user/register',
            type:'post',
            data:{
                username:$registerBox.find('[name="username"]').val(),
                password:$registerBox.find('[name="password"]').val(),
                repassword:$registerBox.find('[name="repassword"]').val()
            },
            dataType:'json',
            success:function (result) {
                console.log(result);
                $registerBox.find('.colWarning').html(result.message);
                if(result.code == 0){
                    setTimeout(function () {
                        $loginBox.show();
                        $registerBox.hide();
                        $registerBox.find('[name="username"]').val('');
                        $registerBox.find('[name="password"]').val('');
                        $registerBox.find('[name="repassword"]').val('');
                        $registerBox.find('.colWarning').html('');
                    },1000)
                }
            }
        })
    })
    
})





