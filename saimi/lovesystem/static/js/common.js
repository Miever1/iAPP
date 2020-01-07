//Get cookie
function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

$(".blogitem").hover(function () {
    $(".blogitem .dropDown").show();
}, function () {
    $(".blogitem .dropDown").hide();
});

$(".timecapsule").hover(function () {
    $(".timecapsule .dropDown").show();
}, function () {
    $(".timecapsule .dropDown").hide();
});

$(".user").hover(function () {
    $(".user .dropDown").show();
}, function () {
    $(".user .dropDown").hide();
});

$("#createindex").click(function () {
    $(".blogcreate #editsubmit").hide();
    $(".blogcreate").show();
});

$("#createMemorial").click(function () {
    if (window.location.href == "http://localhost:8001/calendar") {
        $("#editCalendar").hide();
        $(".memorialcreate").show();
    } else {
        window.location.href = "http://localhost:8001/calendar";
        $(".memorialcreate").show();
    }
})

$("#cancellation").click(function () {
    let userid = getCookie("user_id");
    $.ajax({
        type: "get",
        url: "/logout",
        data: { "id": userid },
        dataType: "JSON",
        success: function (data) {
            let msg = data;
            if (msg.status == "success") {
                alert("Cancellation success");
                window.location.href = "/login";
            } else {
                alert(msg.message);
            }
        }
    });
})

$("#logout").click(function () {
    document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("logout success !");
    window.location.href = "/login";
})

$("#reset").click(function () {
    $(".usersetting").show();
})

$(".cancelBtn").click(function () {
    $(".usersetting").hide();
})

$("#userSubmit").click(function () {
    let oldpassword = $(".usersetting input[name = 'oldpassword']").val();
    let newpassword = $(".usersetting input[name = 'newpassword']").val();
    let userid = getCookie("user_id");
    $.ajax({
        type: "post",
        url: "/reset",
        data: { "id": userid, "origin_password": oldpassword, "new_password": newpassword },
        dataType: "JSON",
        success: function (data) {
            let msg = data;
            if (msg.status == "success") {
                alert("reset password successfully");
                window.location.href = "/login";
            } else {
                alert(msg.message);
            }
        }
    });
})