import { Link } from "react-router-dom";
import nextIcon from "../../public/icons/nextIcon.svg";
function BreadBrumps({ bread1, bread2, bread1To }) {
  return (
    <div className="bread-brumps">
      <div className="container">
        <Link to={bread1To} className="bread1">
          {bread1}
        </Link>
        <img src={nextIcon} />
        <p className="bread2">{bread2}</p>
      </div>
    </div>
  );
}

export default BreadBrumps;
