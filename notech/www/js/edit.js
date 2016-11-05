$(document).on('pageinit', '#edit_page', function(){
    get_edit_info();
});

function get_edit_info(){
    //alert("start get imageurl");
    //var image = myNavigator.getCurrentPage().options.imageurl;
    var image = imageurl;
    var target = document.getElementById("edit_img");
    target.src = image;
}

function emit_note_info(){
    var object = {
        code:imageurl
    };
    socket.emit("note_object", object);
}
