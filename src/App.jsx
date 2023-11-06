import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./assets/Layout";
import Home from "./pages/Home";
import Xizmatlar from "./pages/Xizmatlar";
import Blog from "./pages/Blog";
import BizHaqimizda from "./pages/BizHaqimizda";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="xizmatlar" element={<Xizmatlar />} />
        <Route path="blog" element={<Blog />} />{" "}
        <Route path="bizhaqimizda" element={<BizHaqimizda />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
