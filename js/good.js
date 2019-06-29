var isCollection = false;
var isAgainst = false;
$(document).ready(function () {
    setImg(window.location.search.substring(1, 6));
    $("#collection").click(function () {
        if (isCollection) {
            $("#collection").attr("src", "images/collection.png");
            isCollection = false;
        }else {
            $("#collection").attr("src", "images/collectionR.png");
            isCollection = true;
        }
    })
    $("#against").click(function () {
        if (isAgainst) {
            $("#against").attr("src", "images/against.png");
            isAgainst = false;
        }else {
            $("#against").attr("src", "images/againstR.png");
            isAgainst = true;
        }
    })
})

function setImg(gid) {
    console.log(gid);
    $.post("php/sql.php", {
        "sql": "SELECT gpicture FROM GOOD WHERE gid=" + gid
        }, function f(data) {
        var obj = eval("(" + data + ")");//将返回的json转换成数组
        $(".gpicture").attr("src", obj[0][0]);
        }
    );
}