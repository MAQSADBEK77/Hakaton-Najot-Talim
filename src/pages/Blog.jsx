import BreadBrumps from "../components/BreadBrumps";
import FilterNavBar from "../components/FilterNavBar";
import TitleComponent from "../components/TitleComponent";
import Carts from "../components/Carts";
import { carts } from "../data/data";
import "../css/Blog.css";
function Blog() {
  return (
    <div className="blog">
      <BreadBrumps bread1="Bosh sahifa" bread1To="#" bread2="Blog" />
      <TitleComponent
        span="Biz siz uchun"
        title="Toza va sog’lom muhit yaratamiz"
        param="Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
      />
      <FilterNavBar />
      <div className="container">
        <Carts data={carts} />
      </div>
    </div>
  );
}

export default Blog;
