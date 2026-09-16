import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const init = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login(formData);
    console.log(res);

    if (res.status === 201) {
      navigate("/");
    }

    // await axios
    //   .post("https://fakestoreapi.com/auth/login", formData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  return (
    <div className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-4 shadow-2xl rounded-lg w-[30rem] p-8"
      >
        <h1 className="font-bold text-4xl">Login</h1>
        <input
          value={formData.username}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Enter Your Username"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter Your Password"
        />

        <button type="submit" className="bg-blue-500 text-white font-bold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
