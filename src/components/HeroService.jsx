import "../css/HeroService.css";
import slide1 from "../../public/slide1.png";
import GreenBtn from "./GreenBtn";
import BorderGreenBtn from "./BorderGreenBtn";
function HeroService({ title1, title2, to1, to2 }) {
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
            <GreenBtn title={title1} to={to1} />
            <BorderGreenBtn title={title2} to={to2} />
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
