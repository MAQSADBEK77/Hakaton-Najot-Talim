import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Chat from "../components/Chat";
import SavollaringizBormi from "../components/SavollaringizBormi";
function Layout() {
  return (
    <>
      <NavBar />
      <Header />
      <Outlet />
      <Chat />
      <footer>
        <SavollaringizBormi />
      </footer>
      <NavBar />{" "}
    </>
  );
}
export default Layout;
