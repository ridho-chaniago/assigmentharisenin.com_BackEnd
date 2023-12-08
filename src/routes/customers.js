const express = require("express");

const UserController = require("../controller/customers");
const router = express.Router();

// CREATE - POST 
router.get("/", UserController.getAllCust);
// READ - GET 
router.post("/", UserController.createNewCust);
// UPDATE - PATCH 
router.patch("/:idUser", UserController.updateCust);
// DELETE - DELETE 
router.delete("/:idUser", UserController.deleteCust);

module.exports = router;
