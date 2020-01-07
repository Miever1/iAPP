$(".cancelbtn").click(function () {
    $(".blogcreate").hide();
});

$("#createbtn").click(function () {
    let title = $("#article-hd").val();
    let content = $("#article-bd").val();
    content = content.replace(/\n|\r\n/g, "<br>");
    let userid = getCookie("user_id");
    $.ajax({
        type: "post",
        url: "/createJournal",
        data: { "user_id": userid, "content": content, "title": title },
        dataType: "JSON",
        success: function (data) {
            let msg = data;
            if (msg.status == "success") {
                alert("blog created successfully");
                window.location.href = "/blog";
            } else {
                alert(msg.message);
            }
        }
    });
})

$(".art-content button:last-child").click(function () {
    let artId = $(this).attr("id");
    artId = artId.replace("del-", "");
    let userid = getCookie("user_id");
    console.log(artId, userid);
    $.ajax({
        type: "get",
        url: "/deleteJournal",
        data: { "user_id": userid, "id": artId },
        dataType: "JSON",
        success: function (data) {
            let msg = data;
            if (msg.status == "success") {
                alert("delete success");
                window.location.href = "/blog";
            } else {
                alert(msg.message);
            }
        }
    });
})

$(".editbtn").click(function () {
    let editId = $(this).attr("id").replace("edit-", "");
    let id = editId;
    let articleId = "article-" + editId;
    let article_hd = $("#" + articleId + " h2").text();
    let article_bd = $("#" + articleId + " .art-content p").text();

    $(".blogcreate input[name = 'itemtitle']").val(article_hd);
    $(".blogcreate textarea[name = 'itemcontent']").val(article_bd);
    $("#createbtn").hide();

    $(".blogcreate").show();
    $(".blogcreate #editCalendar").show();

    $("#editsubmit").click(function () {
        let title = $(".blogcreate input[name = 'itemtitle']").val();
        let content = $(".blogcreate textarea[name = 'itemcontent']").val();
        content = content.replace(/\n|\r\n/g, "<br>");
        let userid = getCookie("user_id");
        $.ajax({
            type: "post",
            url: "/editJournal",
            data: { "user_id": userid, "content": content, "title": title, "id": id },
            dataType: "JSON",
            success: function (data) {
                let msg = data;
                if (msg.status == "success") {
                    alert("edit success");
                    window.location.href = "/blog";
                } else {
                    alert(msg.message);
                }
            }
        });
    })
});
