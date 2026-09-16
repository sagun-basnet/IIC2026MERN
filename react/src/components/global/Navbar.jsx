import { Link } from "react-router-dom";
import Button from "../Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between px-4 h-20 items-center bg-amber-600">
      <h1 className="text-4xl font-bold">LOGO</h1>
      <ul className="flex gap-4">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/service"}>
          <li>Service</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>

      {currentUser ? (
        <button onClick={() => logout()} className="bg-red-500">
          Logout
        </button>
      ) : (
        <div className="flex gap-2">
          <Link to="/login">
            <Button text="Login" color="blue" />
          </Link>
          <Link to="/register">
            <Button text="Register" color="red" />
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
