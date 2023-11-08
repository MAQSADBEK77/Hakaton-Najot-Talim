import MiniCart from "./MiniCart";
import TitleComponent from "./TitleComponent";

function NimaUchun({ topTitle, topParam, topSpan }) {
  return (
    <div className="nima-uchun container">
      <TitleComponent title={topTitle} span={topSpan} param={topParam} />
      <div className="mini-carts">
        <MiniCart
          imgSrc="public/miniCart1.svg"
          title="Tozalikdan rohatlanish"
          param="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
keng ko'lamli xizmatlarni taqdim etamiz."
        />{" "}
        <MiniCart
          imgSrc="public/miniCart2.svg"
          title="Professionallik"
          param="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
keng ko'lamli xizmatlarni taqdim etamiz."
        />{" "}
        <MiniCart
          imgSrc="public/miniCart2.svg"
          title="Mutaxassislar xizmati"
          param="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
keng ko'lamli xizmatlarni taqdim etamiz."
        />
      </div>
    </div>
  );
}

export default NimaUchun;
