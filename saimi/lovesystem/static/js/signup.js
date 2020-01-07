//Background slideshow
$.backstretch([
    "../static/images/backgrounds/1.jpg"
    , "../static/images/backgrounds/2.jpg"
    , "../static/images/backgrounds/3.jpg"
], { duration: 3000, fade: 750 });

$(document).ready(function () {
    $("#register-btn").click(function () {
        let user = $("#username").val();
        let psw = $("#password").val();
        $.ajax({
            type: "POST",
            url: "/signup",
            data: { "username": user, "password": psw, },
            dataType: "json",
            success: function (data) {
                let msg = data;
                if (msg.status == "success") {
                    alert("注册成功！");
                } else {
                    alert(msg.message);
                }
            }
        });
    });
});

