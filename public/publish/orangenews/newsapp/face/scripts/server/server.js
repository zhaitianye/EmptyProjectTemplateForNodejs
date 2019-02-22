//测试ajax
function test(sparam, callback) {
    $.ajax({
        type: "post", 
        url: host+"111",
        contentType: "application/json; charset=utf-8",  
        dataType: "json",
        data: JSON.stringify(sparam),
        success: function (data) {
            callback(null,data);
        }, 
        error: function (data) {
            callback(false,'这是个测试');
        }
    });
};