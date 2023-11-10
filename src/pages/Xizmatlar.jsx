import "../css/Hizmatlar.css";
import HeroService from "../components/HeroService";
import BreadBrumps from "../components/BreadBrumps";
import XizmatlarCarts from "../components/XizmatlarCarts";
function Xizmatlar() {
  return (
    <div className="xizmatlar-page">
      <BreadBrumps bread1="Bosh sahifa" bread2="Xizmatlar" bread1To="/" />
      <HeroService
        title1="Buyurtma qilish"
        to1="#"
        title2="Konsultatsiya olish"
        to2="#"
      />
      <div className="container">
        <XizmatlarCarts />
      </div>
    </div>
  );
}

export default Xizmatlar;
