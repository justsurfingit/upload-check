const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  console.log(a + b);
  const c = a + b;
  res.send({ result: c });
});
app.listen(3500);
