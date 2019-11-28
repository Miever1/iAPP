

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
    
   
});

