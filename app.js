var express = require("express");
var app = express();


app.get("/", (req, res) => {
    var query = req.query;
    console.log(req.query);
    res.send("+917340299380");
})

app.listen(5000, () => {
    console.log("App started at port 5000");
})


module.exports = app;
