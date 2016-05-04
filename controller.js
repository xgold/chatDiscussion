"use strict";
var querystring = require("querystring");

class Controller {
    static getIndex(req, res) {
        res.render("index");
    }
    static connect(req, res) {
        if (req.method == "POST") {
            var body = "";
            req.on('data', function(chunk) {
                body += chunk;
            });

            req.on("end", function () {
                var parsing = querystring.parse(body);
                var name = parsing['name'];
                if (name != "") {
                    req.session.name = name;
                    res.redirect("/chat");
                }
                else {
                    console.log("Name null");
                    res.redirect("/");
                }
            });
        }
        else {
            console.log("Method HTTP error");
            res.redirect("/");
        }
    }
    static chat(req, res) {
        res.render("chat", {name: req.session.name});
    }
}

module.exports = Controller;
