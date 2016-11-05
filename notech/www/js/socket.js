var url = "https://mnnm.herokuapp.com/";
var socket = io.connect(url);
socket.on("connection", function(){
    socket.on("encode_back", function(data){
        alert(data);
    });
});

function appendMsg(data) {
    $("#chatLogs").append("<div>" + data + "</div>");
}

function send_png(img){
    socket.emit("encode", img);
    //e.preventDefault();
}
