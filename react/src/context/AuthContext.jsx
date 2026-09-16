import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const user = {
    id: 12,
    email: "jhon@gmail.com",
    name: "Jhon",
    role: "user",
  };

  const [currentUser, setCurrenUser] = useState(
    JSON.parse(localStorage.getItem("appUser")) || null,
  );

  const login = async (value) => {
    const res = await axios.post("https://fakestoreapi.com/auth/login", value);

    localStorage.setItem("appToken", res.data.token);

    setCurrenUser(user);
    localStorage.setItem("appUser", JSON.stringify(user));
    return res;
  };

  const logout = () => {
    localStorage.removeItem("appUser");
    setCurrenUser(null);
  };
  return (
    <AuthContext.Provider value={{ login, currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
