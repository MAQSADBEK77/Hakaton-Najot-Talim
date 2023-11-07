import { Link } from "react-router-dom";

function BorderGreenBtn({ title, to }) {
  return (
    <button>
      <Link className="borderGreenBtn" to={to}>
        {title}
      </Link>
    </button>
  );
}

export default BorderGreenBtn;
