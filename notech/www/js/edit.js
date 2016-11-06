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
    var index = document.getElementById("course").selectedIndex;
    //alert(index);
    var encode_img = makeSmall(imageurl);
    var object = {
        code:encode_img,
        cource:index
    };
    socket.emit("encode", object);
    ons.notification.alert({
        title:"確認",
        messageHTML:"送信しました",
        buttonLabel:"OK",
        callback:function(){
            myNavigator.popPage();
            myNavigator.replacePage("home.html");
        }
    });
}
