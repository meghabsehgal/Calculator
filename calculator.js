import express from "express";
const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/", function (req, res) {
    console.log(req.body);
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);

    var result = parseInt(num1 + num2);
    console.log(result);
    res.send("The result of operation is " + result);
});

app.listen(port, function () {
  console.log("Server is running on port ", port);
});
