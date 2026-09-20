import db from "../database/db.js";

export const getUser = (req, res) => {
  const user = {
    name: "jhon",
    email: "jhon@asdfa.com",
    phone: "9812345678",
    role: "user",
  };
  console.log(user);

  //   res.send("I am from get request");
  return res.send(user);
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
      return res.send({
        message: "User Registered successfully",
        result: result,
      });
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
