//jshint esversion:6
import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;

app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  //res.send("hey");
});

app.post("/", function (req, res) {
  //console.log(req.body.num1);
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);

  var result = parseInt(num1 + num2);
  console.log(result);
  res.send("The result of operation is " + result);
});

app.listen(port, function () {
  console.log("Server is running on port ", port);
});
