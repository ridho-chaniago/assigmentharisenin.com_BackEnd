const userModels = require("../models/customers");

const getAllCust = async (req, res) => {
  try {
    const [data] = await userModels.getAllCust();
    res.json({
      message: "GET all customers success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewCust = async (req, res) => {
  const { body } = req;
  try {
    await userModels.createNewCust(body);
    res.json({
      message: "CREATE new customers success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateCust = async (req, res) => {
  const { body } = req;
  const { idUser } = req.params;
  try {
    await userModels.updataeCust(body, idUser);
    res.json({
      message: "UPDATE customers success",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteCust = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await userModels.deleteCust(idUser);
    res.json({
      message: "DELETE customers success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllCust,
  createNewCust,
  updateCust,
  deleteCust,
};
