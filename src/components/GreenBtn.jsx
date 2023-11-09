import { Link } from "react-router-dom";

function GreenBtn({ title, to }) {
  return (
    <button className="greenFather">
      <Link className="greenBtn" to={to}>
        {title}
      </Link>
    </button>
  );
}

export default GreenBtn;
