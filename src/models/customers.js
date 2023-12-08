const dbPool = require("../config/db");

const getAllCust = () => {
  const SQLQuery = "select * from customers";

  return dbPool.execute(SQLQuery);
};
const createNewCust = (body) => {
  const SQLQuery = `INSERT INTO CUSTOMERS(name, telp, address, total) 
                    VALUES ("${body.name}","${body.telp}","${body.address}","${body.total}")`;

  return dbPool.execute(SQLQuery);
};
const updataeCust = (body, idUser) => {
  const SQLQuery = `UPDATE customers SET name="${body.name}", telp="${body.telp}", address="${body.address}", total="${body.total}" 
                    WHERE id=${idUser}`;

  return dbPool.execute(SQLQuery);
};
const deleteCust = ( idUser) => {
  const SQLQuery = `DELETE FROM customers WHERE id=${idUser}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllCust,
  createNewCust,
  updataeCust,
  deleteCust,
};
