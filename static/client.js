/*
 *
 * ChatDiscussion by Kevin Le Deroff
 * B.Sc SUPINFO Caen annee universitaire 2015-2016
 * Projet sous licence CC-BY 4.0
 * Pour plus d'informations, lire le Readme
 *
 */

(function () {
    var socket = null;
    updateChat();
    var enterTextChat = document.getElementById("enterTextChat");
    var textChat = document.getElementById("textChat");

    // Creation de l'evenement
    enterTextChat.addEventListener("click", sendText);

    // Reception et ecriture dans le chat via socket
    function updateChat() {
        console.log("Update");
            socket = io.connect('http://localhost:1337');
        console.log("Connected");
        socket.on("newsSC", function (data) {
            console.log("Receive Data: " + data.myText);
            writeText(data.myText);
        });
    }

    // Ecriture du text et envoi via socket
    function sendText() {
        if (textChat.value != "") {
            writeText(textChat.value);
            pushText(textChat.value);
        }
        textChat.value = "";
    }

    // Ecriture d'un text dans le chat
    function writeText(text) {
        document.getElementById("fieldToComplet").innerHTML += text + '<br>';
    }

    // Envoi d'un text via socket
    function pushText(text) {
        console.log("Send data: " + text);
        socket.emit("newsCS", {myText: text});
    }

})();
