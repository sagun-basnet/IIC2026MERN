import { Link } from "react-router-dom";
import Button from "../Button";

const Navbar = () => {
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

      <div className="flex gap-2">
        <Link to="/login">
          <Button text="Login" color="blue" />
        </Link>
        <Link to="/register">
          <Button text="Register" color="red" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
