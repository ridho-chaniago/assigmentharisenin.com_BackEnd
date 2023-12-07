const express = require("express");
const app = express();
const usersRoutes = require("./routes/users");
const middlewareLogReq= require('./middleware/log')

app.use(middlewareLogReq);
app.use(express.json())

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("connect");
});

app.listen(4000, () => {
  console.log("server berjalan di port 4000");
});
