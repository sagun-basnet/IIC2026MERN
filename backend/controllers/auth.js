import db from "../database/db.js";
import bcrypt from "bcryptjs";

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
          return res.status(200).send({
            message: "user login successfully",
            data: result[0],
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
