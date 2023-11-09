import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Chat from "../components/Chat";
function Layout() {
  return (
    <>
      <NavBar />
      <Header />
      <Outlet />
      <Chat />
      <NavBar />
    </>
  );
}
export default Layout;
