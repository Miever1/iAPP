function getCookie(cookieName){  
    var cookieValue="";  
    if (document.cookie && document.cookie != '') {   
        var cookies = document.cookie.split(';');  
        for (var i = 0; i < cookies.length; i++) {   
             var cookie = cookies[i];  
             if (cookie.substring(0, cookieName.length + 2).trim() == cookieName.trim() + "=") {  
                   cookieValue = cookie.substring(cookieName.length + 2, cookie.length);   
                   break;  
             }  
         }  
    }   
    return cookieValue;  
}

$(document).ready(function(){
    $("#cancelbtn").click(function(){
        $(".memorialcreate").hide();
    });

    $("#memorial-btn").click(function() {
        let memoryname = $(".memoryform input[name = 'itemname']").val();
        let memorycontent = $(".memoryform textarea[name = 'itemcontent']").val();
        let memorydate =$(".memoryform input[name = 'itemdate']").val();
        let convertDate = new Date(memorydate).valueOf()/1000;
        console.log(convertDate);

        let userid = getCookie("user_id");
        console.log(memoryname,memorycontent,convertDate,userid);
        $.ajax({
            type: "post",
            url: "/createCalendar",
            data: {"user_id":userid,"memoryname":memoryname,"memorycontent":memorycontent,"memorydate":convertDate},
            dataType: "JSON",
            success: function (data) {
                let msg = data;
                if(msg.status == "success") {
                    alert("hello world success");
                    window.location.href = "/index";
                }
                else {
                    alert(msg.message);
                }
                
            }
        });  
        
    })
});
