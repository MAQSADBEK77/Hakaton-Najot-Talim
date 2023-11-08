import "../css/HeroService.css";
import { Link } from "react-router-dom";
import slide1 from "../../public/slide1.png";
import GreenBtn from "./GreenBtn";
import BorderGreenBtn from "./BorderGreenBtn";
function HeroService() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-left">
          <span>Biz siz uchun</span>
          <h1>Toza va sog’lom muhit yaratamiz</h1>
          <p>
            Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng
            ko'lamli xizmatlarni taqdim etamiz.
          </p>
          <div className="hero-links">
            <GreenBtn title="Bog’lanish" to="/xizmatlar/tozalashXizmati" />
            <BorderGreenBtn title="Bizning xizmatlar" to="/xizmatlar" />
          </div>
        </div>
        <div className="hero-right">
          <img src={slide1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroService;
