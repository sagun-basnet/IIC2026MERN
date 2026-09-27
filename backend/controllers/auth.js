import db from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  try {
    const { email, password } = req.body;

    const q = `select * from user where email= ?`;

    db.query(q, [email], (err, result) => {
      if (err) {
        return res.send({
          message: "Error while executing query.",
          error: err,
        });
      }
      if (result.length === 0) {
        return res.status(404).send({ message: "User Not Found" });
      } else {
        const passwordMatch = bcrypt.compareSync(password, result[0].password);

        if (passwordMatch) {
          const token = jwt.sign(
            {
              userId: result[0].id,
              userName: result[0].name,
              userRole: result[0].role,
            },
            "secretkey",
          );
          return res.status(200).send({
            message: "user login successfully",
            data: result[0],
            token: token,
          });
        } else {
          return res.status(404).send({
            message: "Email or password didn't match",
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};
