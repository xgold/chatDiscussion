var express       = require("express");
var path          = require("path");
var cookieSession = require("cookie-session");
var controller    = require("./controller.js");
var app           = express();
var router        = express.Router();
var server = require('http').Server(app);
var io = require('socket.io')(server);



app.use(express.static("static"));
app.use(cookieSession({
    name: 'session',
    secret: "supinfo"
}));
app.set("view engine", "jade");
app.set("views", path.join(__dirname, "templates"));

router.route("/").get(controller.getIndex);
router.route("/connect").post(controller.connect);
router.route("/chat").get(controller.chat);

app.use(router);
server.listen(1337);

console.log("Server started");

io.on('connection', function (socket) {
    socket.on('newsCS', function (data) {
        console.log("Receive data on server: " + data.myText);
        socket.broadcast.emit('newsSC', {myText: data.myText});
    });
});
