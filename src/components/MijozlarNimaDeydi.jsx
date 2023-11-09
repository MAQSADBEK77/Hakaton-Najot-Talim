import TitleComponent from "./TitleComponent";
import Raiting from "./Raiting";
function MijozlarNimaDeydi() {
  return (
    <div className="mijozlar-nima-deydi container">
      <TitleComponent
        title="Ilovamizdan foydalanib ko’ring!"
        span="Biz siz uchun"
      />
      <div className="carousel container">
        <Raiting
          fullname="John Doe"
          raiting={5}
          massage="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
        />
        <Raiting
          fullname="John Doe"
          raiting={5}
          massage="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
        />{" "}
        <Raiting
          fullname="John Doe"
          raiting={5}
          massage="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
        />
      </div>
    </div>
  );
}

export default MijozlarNimaDeydi;
