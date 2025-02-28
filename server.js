const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("Hello react");
});
var server = app.listen(8081, function () {
  var host = server.address().server;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
