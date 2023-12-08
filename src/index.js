require ("dotenv").config()
const PORT = process.env.PORT || 5000
const express = require("express");
const app = express();
const usersRoutes = require("./routes/customers");
const middlewareLogReq= require('./middleware/log')


app.use(middlewareLogReq);



app.use(express.json())

app.use("/customers", usersRoutes);

// app.get("/", (req, res) => {
//   res.send("connect");
// });

app.listen(PORT, () => {
  console.log(`server berjalan di port ${PORT}`);
});
