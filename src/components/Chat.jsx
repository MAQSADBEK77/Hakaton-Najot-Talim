import { Link } from "react-router-dom";
import chatIcon from "../../public/icons/mail.svg";
function Chat() {
  return (
    <Link to="/chat" className="chat-btn">
      <img src={chatIcon} className="mailIcon w-6 h-6" />
    </Link>
  );
}

export default Chat;
