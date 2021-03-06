$(document).ready(function () {
    $("#cancelbtn").click(function () {
        $(".memorialcreate").hide();
    });

    $("#memorial-btn").click(function () {
        $("#editCalendar").hide();
        let memoryname = $(".memoryform input[name = 'itemname']").val();
        let memorycontent = $(".memoryform textarea[name = 'itemcontent']").val();
        let memorydate = $(".memoryform input[name = 'itemdate']").val();
        let convertDate = new Date(memorydate).valueOf() / 1000;
        let userid = getCookie("user_id");
        $.ajax({
            type: "post",
            url: "/createCalendar",
            data: { "user_id": userid, "memoryname": memoryname, "memorycontent": memorycontent, "memorydate": convertDate },
            dataType: "JSON",
            success: function (data) {
                let msg = data;
                if (msg.status == "success") {
                    alert("calendar created successfully");
                    window.location.href = "/calendar";
                } else {
                    alert(msg.message);
                }
            }
        });
    })

    $(".editbtn").click(function () {

        let parentId = "mycalendar-" + $(this).attr("id");
        parentId = parentId.replace("-btn", "");
        let id = parentId.replace("mycalendar-", "");
        let itemname = $("#" + parentId + " h2 span:first-child").text();
        let itemcontent = $("#" + parentId + " p").text();
        let itemdate = $("#" + parentId + " h2 span:last-child").text();

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
        $(".memorialcreate #memorial-btn").css("display", "none");
        $(".memorialcreate").show();

        $("#editCalendar").click(function () {
            let memoryname = $(".memoryform input[name = 'itemname']").val();
            let memorycontent = $(".memoryform textarea[name = 'itemcontent']").val();
            let memorydate = $(".memoryform input[name = 'itemdate']").val();
            let convertDate = new Date(memorydate).valueOf() / 1000;
            let userid = getCookie("user_id");
            $.ajax({
                type: "post",
                url: "/editCalendar",
                data: { "user_id": userid, "memoryname": memoryname, "memorycontent": memorycontent, "memorydate": convertDate, "id": id },
                dataType: "JSON",
                success: function (data) {
                    let msg = data;
                    if (msg.status == "success") {
                        alert("edit success");
                        window.location.href = "/calendar";
                    } else {
                        alert(msg.message);
                    }
                }
            });
        })
    })

    $(".calendar-content button").click(function () {
        let deleteId = $(this).attr("id");
        deleteId = deleteId.replace("del-", "");
        let userid = getCookie("user_id");
        $.ajax({
            type: "get",
            url: "/deleteCalendar",
            data: { "user_id": userid, "id": deleteId },
            dataType: "JSON",
            success: function (data) {
                let msg = data;
                if (msg.status == "success") {
                    alert("delete success");
                    window.location.href = "/calendar";
                } else {
                    alert(msg.message);
                }
            }
        });
    })
});
