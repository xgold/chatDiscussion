(function () {
    var socket = null;
    updateChat();
    var enterTextChat = document.getElementById("enterTextChat");
    var textChat = document.getElementById("textChat");

    enterTextChat.addEventListener("click", sendText);

    function updateChat() {
        console.log("Update");
            socket = io.connect('http://10.19.19.197:1337');
        console.log("Connected");
        socket.on("newsSC", function (data) {
            console.log("Receive Data: " + data.myText);
            writeText(data.myText);
        });
    }

    function sendText() {
        if (textChat.value != "") {
            writeText(textChat.value);
            pushText(textChat.value);
        }
        textChat.value = "";
    }

    function writeText(text) {
        document.getElementById("fieldToComplet").innerHTML += text + '<br>';
    }

    function pushText(text) {
        console.log("Send data: " + text);
        socket.emit("newsCS", {myText: text});
    }

})();
