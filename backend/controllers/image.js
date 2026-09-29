import db from "../database/db.js";

export const uploadProfile = (req, res) => {
  const image = req.files;
  //   console.log(image);
  //   res.send(image);

  for (let i = 0; i < image.length; i++) {
    const path = `/images/${image[i].filename}`;

    //   const q = `update user set profile = ?`;
    const q = `insert into image(user_id, path) values(?,?)`;
    db.query(q, [1, path], (err, result) => {
      if (err) {
        return res.send({
          message: "Error while executing query.",
          error: err,
        });
      }
      return res.send({ message: "profile updated successfully" });
    });
  }
};
