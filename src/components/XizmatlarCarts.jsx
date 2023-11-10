import TitleComponent from "../components/TitleComponent";
import Carts from "./Carts";
import { carts } from "../data/data";
function XizmatlarCarts() {
  return (
    <div>
      <TitleComponent
        span="Siz uchun"
        title="Qanday tozalash xizmatlar taklif qilamiz"
        param="Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun quyidagi xizmatlarni taklif qilamiz"
      />
      <Carts data={carts} />
    </div>
  );
}

export default XizmatlarCarts;
