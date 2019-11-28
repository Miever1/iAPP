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
    $(".cancelbtn").click(function() {
        $(".blogcreate").hide();}
    );
    
    $("#createbtn").click(function() {
        let title = $("#article-hd").val();
        let content = $("#article-bd").val();
        content = content.replace(/\n|\r\n/g,"<br>");
        let userid = getCookie("user_id");
        $.ajax({
            type: "post",
            url: "/createJournal",
            data: {"user_id":userid,"content":content,"title":title},
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