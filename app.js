var express = require("express");
var app = express();


app.get("/", (req, res) => {
    var query = req.query;
    console.log(req.query);
    res.send("+917340299380");
})

app.get("/exotel", (req, res) => {
    var query = req.query;
    console.log(req.query);
    res.json({
  "fetch_after_attempt": false,
  "destination": {
    "numbers": [
      "+917424926949"
    ]
  },
  "outgoing_phone_number": "01414931249",
  "record": true,
  "recording_channels": "dual",
  "max_ringing_duration": 45,
  "max_conversation_duration": 3600,
  "music_on_hold": {
    "type": "operator_tone"
  },
  "start_call_playback": {
    "playback_to": "both",
    "type": "text",
    "value": "This text would be spoken out to the callee"
  }
});
})

app.listen(5000, () => {
    console.log("App started at port 5000");
})


module.exports = app;
