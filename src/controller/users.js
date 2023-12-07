const getAllUsers = (req, res) => {
  const data = {
    nama: "ridho",
    usia: 28,
    asal: "Batam",
  };
  res.json({
    message: "GET all users success",
    data: data,
  });
};

const createNewUsers = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new user success",
    data: req.body,
  });
};
const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log("id : ", idUser);

  res.json({
    message: "Update user success",
    data: req.body,
  });
};
const deleteUser = (req, res) => {
  const { idUser } = req.params;
  console.log("id : ", idUser);

  res.json({
    message: "DELETE user success",
    data: {
      id: idUser,
      Nama: "Ridho",
      Usia: 28,
      Asal: "Batam",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
};
