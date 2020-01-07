//Background slideshow
$.backstretch([
    "../static/images/backgrounds/1.jpg"
    , "../static/images/backgrounds/2.jpg"
    , "../static/images/backgrounds/3.jpg"
], { duration: 3000, fade: 750 });

$(document).ready(function () {
    $("#mybtn").click(function () {
        let user = $("#username").val();
        let psw = $("#password").val();
        $.ajax({
            type: "post",
            url: "/login",
            data: { "username": user, "password": psw },
            dataType: "json",
            success: function (data) {
                let msg = data;
                if (msg.status == 'success') {
                    alert("登录成功!");
                    window.location.href = "/index";
                    document.cookie = "user_id=" + msg.user.id;
                } else {
                    setTimeout(() => {
                        alert(msg.message);
                    }, 5000);
                }
            }
        });
    });
});

