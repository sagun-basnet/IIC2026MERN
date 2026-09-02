import Button from "./Button";

const Navbar = ({ user }) => {
  return (
    <nav className="flex justify-between px-4 h-20 items-center bg-amber-600">
      <h1 className="text-4xl font-bold">LOGO</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>

      {user.length === 0 ? (
        <div className="flex gap-2">
          <Button text="Login" color="blue" />
          <Button text="Register" color="red" />
        </div>
      ) : (
        <h1 className="text-2xl font-bold">{user}</h1>
      )}
    </nav>
  );
};
export default Navbar;
