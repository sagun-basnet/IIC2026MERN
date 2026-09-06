import { Outlet } from "react-router-dom";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const HomeLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

export default HomeLayout;