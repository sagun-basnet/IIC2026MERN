import db from "../database/db.js";

export const getUser = (req, res) => {
  try {
    const q = `select * from user`;

    db.query(q, (err, result) => {
      if (err) {
        return res.send({
          message: "Error while executing query.",
          error: err,
        });
      }
      return res.send({ message: "User retrived", data: result });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUser = (req, res) => {
  try {
    const { id } = req.params;

    const q = `select * from user where id = ?`;

    db.query(q, [id], (err, result) => {
      if (err) {
        return res.status(500).send({
          message: "Error while executing query.",
          error: err,
        });
      }

      return res.status(200).send({
        data: result[0],
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  const q = `delete from user where id = ?`;

  db.query(q, [id], (err, result) => {
    if (err) {
      return res.status(500).send({
        message: "Error while executing query.",
        error: err,
      });
    }

    return res.status(200).send({ message: "User deleted successfully." });
  });
};

export const editUser = (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, phone, email, password } = req.body;

    const q = `update user set name = ?, address=?, phone=?, email=?, password=? where id = ?`;
    db.query(q, [name, address, phone, email, password, id], (err, result) => {
      if (err) {
        return res.send({
          message: "Error while executing query.",
          error: err,
        });
      }
      return res.status(201).send({
        message: "User edited successfully",
        result: result,
      });
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const postUser = (req, res) => {
  try {
    const { name, address, phone, email, password } = req.body;

    const q = `Insert into user(name, address, phone, email, password) values(?,?,?,?,?)`;
    db.query(q, [name, address, phone, email, password], (err, result) => {
      if (err) {
        return res.send({
          message: "Error while executing query.",
          error: err,
        });
      }
      return res.status(201).send({
        message: "User Registered successfully",
        result: result,
      });
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
