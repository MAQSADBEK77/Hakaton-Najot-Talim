import { Link } from "react-router-dom";

function GreenBtn({ title, to }) {
  return (
    <button>
      <Link className="greenBtn" to={to}>
        {title}
      </Link>
    </button>
  );
}

export default GreenBtn;
