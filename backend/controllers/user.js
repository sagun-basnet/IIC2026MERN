import db from "../database/db.js";
import bcrypt from "bcryptjs";

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

    const salt = bcrypt.genSaltSync(10);
    const encrptedPassword = bcrypt.hashSync(password, salt);
    console.log(encrptedPassword);

    db.query(
      q,
      [name, address, phone, email, encrptedPassword],
      (err, result) => {
        if (err) {
          return res.send({
            message: "Error while executing query.",
            error: err,
          });
        }
        const q2 = "askldjfasdfasdfsfd";
        db.query(q2, [], (err1, result1) => {
          if (err1) {
            return res.send({
              message: "Error while executing query.",
              error: err,
            });
          }
          return res.send({ result1: result, result2: result1 });
        });
        // return res.status(201).send({
        //   message: "User Registered successfully",
        //   result: result,
        // });
      },
    );
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
