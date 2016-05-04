/*
 *
 * ChatDiscussion by Kevin Le Deroff
 * B.Sc SUPINFO Caen annee universitaire 2015-2016
 * Projet sous licence CC-BY 4.0
 * Pour plus d'informations, lire le Readme
 *
 */

"use strict";
var querystring = require("querystring");

// Classe
class Controller {
    // Index
    static getIndex(req, res) {
        res.render("index");
    }
    // Connect
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
    // Chat
    static chat(req, res) {
        res.render("chat", {name: req.session.name});
    }
}

module.exports = Controller;
