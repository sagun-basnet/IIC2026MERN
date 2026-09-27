import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(400).send({
      message: "Please Login first",
    });
  }

  const userData = jwt.verify(token, "secretkey");

  req.userRole =
    userData.userRole === "admin"
      ? "admin"
      : userData.userRole === "user"
        ? "user"
        : userData.userRole === "superAdmin"
          ? "superAdmin"
          : null;

  next();
};

export const isAdmin = (req, res, next) => {
  const role = req.userRole;
  if (role === "admin") {
    next();
  } else {
    res.status(401).send({
      message: "Unauthorized Role",
    });
  }
};
export const isSuperAdmin = (req, res, next) => {
  const role = req.userRole;

  if (role === "superAdmin") {
    next();
  } else {
    res.status(401).send({
      message: "Unauthorized Role",
    });
  }
};
export const isSuperAdminOrAdmin = (req, res, next) => {
  const role = req.userRole;

  if (role === "superAdmin" || role === "admin") {
    next();
  } else {
    res.status(401).send({
      message: "Unauthorized Role",
    });
  }
};

export const isUser = (req, res, next) => {
  const role = req.userRole;

  if (role === "user") {
    next();
  } else {
    res.status(401).send({
      message: "Unauthorized Role",
    });
  }
};
