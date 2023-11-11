import BizHaqimizdaHero from "../components/BizHaqimizdaHero";
import BreadBrumps from "../components/BreadBrumps";
import NimaUchun from "../components/NimaUchun";
import IlovaComponent from "../components/IlovaComponent";
import MijozlarNimaDeydi from "../components/MijozlarNimaDeydi";
import Homiylar from "../components/Homiylar.jsx";
function BizHaqimizda() {
  return (
    <div className="biz-haqimizda">
      <BreadBrumps bread1="Bosh sahifa" bread1To="/" bread2="Biz haqimizda" />
      <BizHaqimizdaHero />
      <NimaUchun />
      <IlovaComponent />
      <MijozlarNimaDeydi />
      <Homiylar />
    </div>
  );
}

export default BizHaqimizda;
