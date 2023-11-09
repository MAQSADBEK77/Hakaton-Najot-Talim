import { xomiylar } from "../data/data";
import HomiylarCorousel from "./HomiylarCorousel";
import TitleComponent from "./TitleComponent";
function Homiylar() {
  return (
    <div className="homiylar container">
      <TitleComponent title="Hamkor kompaniyalar" span="Biz bilan ishlovchi" />
      <HomiylarCorousel data={xomiylar} />
    </div>
  );
}

export default Homiylar;
