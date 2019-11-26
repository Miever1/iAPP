$(document).ready(function(){
    $("#register-btn").click(function(){
        var user = $("#username").val();
        var psw = $("#password").val();
        var sex =  $("input[name='gender']:checked").val();
        console.log(user,psw,sex);
        $.ajax({
            type: "POST",
            url: "/signup",
            data: {"username":user,"password":psw,"gender":sex},
            dataType: "json",
            success: function (data) {
                var msg = data;
                if(msg.status == "success") {
                        alert("注册成功！");
                }
                if(msg.status == "fail") {
                    alert(msg.message);
                }
            }
        });
      });
});

