import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
function Layout() {
  return (
    <>
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
