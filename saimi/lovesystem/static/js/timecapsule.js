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

        let userid = getCookie("user_id");
        
        $.ajax({
            type: "post",
            url: "/createCalendar",
            data: {"user_id":userid,"memoryname":memoryname,"memorycontent":memorycontent,"memorydate":convertDate},
            dataType: "JSON",
            success: function (data) {
                let msg = data;
                if(msg.status == "success") {
                    alert("hello world success");
                    //window.location.href = "/index";
                }
                else {
                    alert(msg.message);
                }
                
            }
        });  
        
    })

    $(".editbtn").click(function() {

        let parentId = "mycalendar-" + $(".editbtn").attr("id");
        parentId = parentId.replace("-btn","");

        let itemname = $("#" + parentId + " h2 span:first-child").text();
        let itemcontent = $("#" + parentId + " p").text();
        let itemdate = $("#" + parentId + " h2 span:last-child").text();

        console.log(itemname,itemcontent,itemdate);
        

        //time formatting
        let dateSplit = itemdate.split(",");
        let monthDay = dateSplit[0].split(".");
        let year = parseInt(dateSplit[1]); 
        let day = parseInt(monthDay[1]);
        let dateString = "" + monthDay[0] + " " + day + " " + year;
        let editDate = new Date(dateString);
        let converDate = "" + editDate.getFullYear() + "-" + (editDate.getMonth() + 1) + "-" + editDate.getDay();

        $(".memorialcreate input[name = 'itemname']").val(itemname);
        $(".memoryform textarea[name = 'itemcontent']").val(itemcontent);
        $(".memorialcreate input[name = 'itemdate']").val(converDate);     
        $(".memorialcreate").show();

        $(".memorialcreate button:last-child").attr("id","editCalendar");  

        $("#editCalendar").click(function () {  

                let memoryname = $(".memoryform input[name = 'itemname']").val();
                let memorycontent = $(".memoryform textarea[name = 'itemcontent']").val();
                let memorydate =$(".memoryform input[name = 'itemdate']").val();
                let convertDate = new Date(memorydate).valueOf()/1000;

            $.ajax({
                type: "post",
                url: "/editCalendar",
                data: {"user_id":userid,"memoryname":memoryname,"memorycontent":memorycontent,"memorydate":convertDate,"id":parentId},
                dataType: "JSON",
                success: function (data) {
                    let msg = data;
                    if(msg.status == "success") {
                        alert("edit success");
                        window.location.href = "/index";
                    }
    
                    else {
                        alert(msg.message);
                    }
                    
                }
            });   
        })
        
    })
});
