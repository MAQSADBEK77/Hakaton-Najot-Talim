import playMarket from "../../public/icons/playMarket.svg";
import appStore from "../../public/icons/appStore.svg";
import phone from "../../public/phone.png";
function IlovaComponent() {
  return (
    <div className="hero hero2 container">
      <div className="ilova flex justify-between items-center py-12">
        <div className="hero-left ilova-left">
          {" "}
          <span>Biz siz uchun</span>
          <h1>Ilovamizdan foydalanib ko’ring!</h1>
          <p>
            Ilovamizni hoziroq yuklab oling va u orqali xizmatlarimizdan tez va
            oson foydalaning.{" "}
          </p>
          <div className="hero-links">
            <a href="#">
              <img src={playMarket} alt="" />
            </a>{" "}
            <a href="#">
              <img src={appStore} alt="" />
            </a>
          </div>
        </div>
        <div className="ilova-right">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
}

export default IlovaComponent;
