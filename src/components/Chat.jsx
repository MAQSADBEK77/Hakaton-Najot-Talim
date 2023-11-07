import { Link } from "react-router-dom";

function Chat() {
  return (
    <Link to="/chat" className="chat-btn">
      <img src="./public/icons/mail.svg" className="mailIcon w-6 h-6" />
    </Link>
  );
}

export default Chat;
