var express = require("express");
var app = express();


app.get("/exotel", (req, res) => {
    var query = req.query;
    res.send("7340299380");
})

app.listen(3000, () => {
    console.log("App started at port 300");
})