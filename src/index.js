require ("dotenv").config()
const PORT = process.env.PORT || 5000
const express = require("express");
const app = express();
const usersRoutes = require("./routes/customers");
const productsRoutes = require("./routes/products");
const middlewareLogReq= require('./middleware/log')


app.use(middlewareLogReq);



app.use(express.json())

app.use("/customers", usersRoutes);
app.use("/products", productsRoutes);



app.listen(PORT, () => {
  console.log(`server berjalan di port ${PORT}`);
});
