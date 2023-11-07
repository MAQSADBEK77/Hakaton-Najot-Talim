import TitleComponent from "./TitleComponent";

function NimaUchun({ topTitle, topParam, topSpan }) {
  return (
    <div className="nima-uchun">
      <TitleComponent title={topTitle} span={topSpan} param={topParam} />
    </div>
  );
}

export default NimaUchun;
