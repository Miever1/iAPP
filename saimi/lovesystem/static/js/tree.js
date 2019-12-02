function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]);
    else
        return null;
}   


$(document).ready(function () {
    $(".kettle").click(function () { 

        $("#water").css("visibility","visible");
        $(".waterContainer").addClass("waterSlider");
        setTimeout(function () {  
            $("#water").css("visibility","hidden");
            $(".waterContainer").removeClass("waterSlider");
        },2000)
        
        
    });

    $("#createTree").click(function () {  
        $(".treeCteate").show();
        $("#treeSubmit").show();
        $("#editSubmit").hide();
    })

    $("#editTree").click(function () {  
        $("#treeSubmit").hide();
        $(".treeCteate").show();
    })

    $("#cancelBtn").click(function () {  
        $(".treeCteate").hide();
    })

    $("#treeSubmit").click(function () {  
        let treeName = $(".treeCteate input[name = 'itemname']").val();
        let userid = getCookie("user_id");
        $.ajax({
            type: "post",
            url: "/createTree",
            data: {"user_id":userid,"treename":treeName},
            dataType: "JSON",
            success: function (data) {
                let msg = data;
                if(msg.status == "success") {
                    alert("tree created successfully");
                    window.location.href = "/tree";
                }
                else {
                    alert(msg.message);
                }
                
            }
        });  
    })

    $(".kettle").click(function () {  
        let treeid = $("#treeId").text();
        let userid = getCookie("user_id");   
        $.ajax({
            type: "post",
            url: "/tree",
            dataType: "JSON",
            success: function (data) {      
                let msg = data;
                $.ajax({
                    type: "get",
                    url: "/addWater",
                    data: {"id":treeid,"user_id":userid},
                    dataType: "JSON",
                    success: function (data) {      
                        let watersize = msg.watersize;
                        $("#waterSize").val(watersize);
                    }
                });  
            }
        });  
    })

    

    $("#deleteTree").click(function () {  
        let treeid = $("#treeId").text();
        let userid = getCookie("user_id");        
        $.ajax({
            type: "get",
            url: "/deleteTree",
            data: {"id":treeid,"user_id":userid},
            dataType: "JSON",
            success: function (data) {
                let msg = data;
                if(msg.status == "success") {
                    alert("tree deleted successfully");
                    window.location.href = "/tree";
                }
                else {
                    alert(msg.message);
                }
                
            }
        });  
    })

    


});

