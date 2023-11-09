import Qoshtirnoq from "../../public/icons/qoshtirnoq.svg";
import johnImg from "../../public/john.svg";
function Raiting({ massage, fullname, imgsrc, raiting }) {
  return (

      <div className="carousel-item raiting">
        <div className="raiting-top">
          <img src={Qoshtirnoq} />
          <p>{massage}</p>
        </div>
        <div className="raiting-bottom">
          <img src={johnImg} alt="" />
          <p>{fullname}</p>
          <div className="rating">
            {raiting >= 1 && (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-5 h-5"
              />
            )}
            {raiting >= 2 && (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-5 h-5"
              />
            )}
            {raiting >= 3 && (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-5 h-5"
              />
            )}
            {raiting >= 4 && (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-5 h-5"
              />
            )}
            {raiting >= 5 && (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-5 h-5"
                checked
              />
            )}
          </div>
        </div>
      </div>
  );
}

export default Raiting;
