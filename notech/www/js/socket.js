var socket = io.connect();

socket.on("test_back", function(data){
    appendMsg(data);
});

function appendMsg(data) {
    $("#chatLogs").append("<div>" + data + "</div>");
}

$("form").submit(function(e){
    var message= $("#msgForm").val();
    $("#msgForm").val('');
    socket.emit("test", message);
    e.preventDefault();
});
