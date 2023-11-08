import MiniCart from "./MiniCart";
import TitleComponent from "./TitleComponent";
import minicart1 from "../../public/miniCart1.svg";
import minicart2 from "../../public/miniCart2.svg";
import minicart3 from "../../public/miniCart3.svg";
function NimaUchun({ topTitle, topParam, topSpan }) {
  return (
    <div className="nima-uchun container">
      <TitleComponent title={topTitle} span={topSpan} param={topParam} />
      <div className="mini-carts">
        <MiniCart
          imgSrc={minicart1}
          title="Tozalikdan rohatlanish"
          param="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
keng ko'lamli xizmatlarni taqdim etamiz."
        />{" "}
        <MiniCart
          imgSrc={minicart2}
          title="Professionallik"
          param="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
keng ko'lamli xizmatlarni taqdim etamiz."
        />{" "}
        <MiniCart
          imgSrc={minicart3}
          title="Mutaxassislar xizmati"
          param="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
keng ko'lamli xizmatlarni taqdim etamiz."
        />
      </div>
    </div>
  );
}

export default NimaUchun;
