$(document).on('pageinit', '#edit_page', function(){
    get_edit_info();
});

function get_edit_info(){
    //alert("start get imageurl");
    //var image = myNavigator.getCurrentPage().options.imageurl;
    var image = "data:image/jpeg;base64,"+imageurl;
    var target = document.getElementById("edit_img");
    target.src = image;
}

function emit_note_info(){
    var index = document.getElementById("course").selectedIndex;
    alert(index);
    var object = {
        code:makeSmall(imageurl),
        cource:index
    };
    socket.emit("encode", object);
}
