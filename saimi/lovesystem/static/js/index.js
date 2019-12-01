
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]);
    else
        return null;
}   

$(document).ready(function(){  

    $(".blogitem").hover(function() {
        $(".blogitem .dropDown").show();},function() {
            $(".blogitem .dropDown").hide();
        }
    );

    $(".timecapsule").hover(function() {
        $(".timecapsule .dropDown").show();},function() {
            $(".timecapsule .dropDown").hide();
        }
    );

    $(".user").hover(function() {
        $(".user .dropDown").show();},function() {
            $(".user .dropDown").hide();
        }
    );

    $("#createindex").click(function() {
        $(".blogcreate").show();}
    );

    $("#createMemorial").click(function() {

        if(window.location.href == "http://localhost:8001/calendar") {
            $(".memorialcreate").show();
        }

        else {
            window.location.href = "http://localhost:8001/calendar";
            $(".memorialcreate").show();
        }


        
    })

    $("#cancellation").click(function () {  
        let userid = getCookie("user_id");
        $.ajax({
            type: "get",
            url: "/logout",
            data: {"id":userid},
            dataType: "JSON",
            success: function (data) {
                let msg = data;
                if(msg.status == "success") {
                    $.removeCookie("user_id");
                    alert("Cancellation success");
                    window.location.href = "/login";
                }
                else {
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
    
   
});

