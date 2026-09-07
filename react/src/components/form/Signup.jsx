import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const init = {
    name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target.name + ":" + e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setData(data.push(formData))

    if (formData.name.length === 0) {
      alert("Name Field should be filled");
      return;
    }

    if (formData.phone.length < 9) {
      alert("Phone must be 10 charater long");
      return;
    }

    if (formData.password.length < 7) {
      alert("Password must be 8 charater long");
      return;
    }

    console.log(formData);

    setFormData(init);

    navigate("/login");
  };

  return (
    <div className="w-full h-[100vh] grid place-items-center transition ease-in-out duration-700">
      <form
        onSubmit={handleSubmit}
        action=""
        className="h-[60%] w-[45%] rounded-xl shadow-2xl flex flex-col items-center justify-center p-8 gap-4"
      >
        <h3 className="w-full text-4xl outline-none font-bold">Register</h3>

        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="Enter Full Name"
          className="outline-none font-semibold border-0 !border-b-2 w-[80%] border-black border-botton px-8"
        />

        <input
          value={formData.address}
          onChange={handleChange}
          type="text"
          name="address"
          id="address"
          placeholder="Enter Full Address"
          className="outline-none font-semibold border-0 !border-b-2 w-[80%] border-black border-botton px-8"
        />

        <input
          value={formData.phone}
          onChange={handleChange}
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone "
          className="outline-none font-semibold border-0 !border-b-2 w-[80%] border-black border-botton px-8"
        />

        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email Address"
          className="outline-none font-semibold border-0 !border-b-2 w-[80%] border-black border-botton px-8"
        />

        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter your Password"
          className="outline-none font-semibold border-0 !border-b-2 w-[80%] border-black border-botton px-8"
        />

        <button
          className="bg-blue-500 p-2 px-4 outline-none font-bold rounded-sm hover:bg-lightPrimary transition-colors duration-200 mt-4"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
