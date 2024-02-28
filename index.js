const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const App = express();

App.set("port",(process.env.port || 8000));

App.use(bodyParser.urlencoded( { extended: false } ));

App.use(bodyParser.json());

App.get("/", function(req,res){
    res.send("Hi! I'm just a chatbot web app\n You are welcome");
})

App.listen(App.get("port"),function(){
    console.log("Server is running and listening on port " + App.get("port"));
})