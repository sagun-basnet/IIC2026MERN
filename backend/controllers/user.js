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
