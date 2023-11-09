import GreenBtn from "./GreenBtn";
import TitleComponent from "./TitleComponent";
import Logo from "../../public/icons/logo.svg";
function SavollaringizBormi() {
  return (
    <>
      <div className="savollaringiz-bormi container">
        <TitleComponent
          span="Biz uchun"
          title="Yana savollaringiz bormi?"
          param="Sizni qiynayotgan savollaringiz bo’lsa biz bilan bog’laning! Mutaxassislarimiz sizning savollaringizga javob berishadi!"
        />
        <GreenBtn title="Savol berish" to="/chat" />
      </div>
      <div className="toza-makon container">
        <div className="logo-footer">
          <img src={Logo} />
          <h1>Toza Makon</h1>
        </div>
        <p>Tozalik biz bilan boshlanadi</p>
      </div>
    </>
  );
}

export default SavollaringizBormi;
