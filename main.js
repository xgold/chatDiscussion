/*
 *
 * ChatDiscussion by Kevin Le Deroff
 * B.Sc SUPINFO Caen annee universitaire 2015-2016
 * Projet sous licence CC-BY 4.0
 * Pour plus d'informations, lire le Readme
 *
 */

// Inclusion des paquets necessaire
var express       = require("express");
var path          = require("path");
var cookieSession = require("cookie-session");
var controller    = require("./controller.js");
var app           = express();
var router        = express.Router();
var server        = require('http').Server(app);
var io            = require('socket.io')(server);


// Initialisation d'express
app.use(express.static("static"));
app.use(cookieSession({
    name: 'session',
    secret: "supinfo"
}));
app.set("view engine", "jade");
app.set("views", path.join(__dirname, "templates"));

// Definition des routes
router.route("/").get(controller.getIndex);
router.route("/connect").post(controller.connect);
router.route("/chat").get(controller.chat);

app.use(router);
server.listen(1337);
console.log("Server started");

// Ouverture d'un web socket sur le serveur
io.on('connection', function (socket) {
    socket.on('newsCS', function (data) {
        console.log("Receive data on server: " + data.myText);
        socket.broadcast.emit('newsSC', {myText: data.myText});
    });
});
