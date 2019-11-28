$(document).ready(function(){
    $("#mybtn").click(function(){
        var user = $("#username").val();
        var psw = $("#password").val();
        $.ajax({
            type: "post",
            url: "/login",
            data: {"username":user,"password":psw},
            dataType: "json",
            success: function (data) {
                var msg = data;
                if(msg.status == 'success') {
                    alert("登录成功!");
                    window.location.href = "/index";
                    document.cookie = "user_id=" + msg.user.id;
                }
                else {
                    setTimeout(() => {
                        alert(msg.message);
                    }, 5000);
                }
            }
        });

      });
    });

   

