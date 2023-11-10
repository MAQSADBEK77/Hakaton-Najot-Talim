import operator from "../../public/jone.svg";
import "../css/Chat.css";
import sendImg from "../../public/icons/send.svg";
function Chat() {
  return (
    <>
      <div className="container chatt flex flex-col gap-5">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={operator} />
            </div>
          </div>
          <div className="chat-bubble max-w-lg">
            Assalomu alaykum Toza Makon platformasiga xush kelibisiz. Mening
            ismim Jane Doe va sizga xizmat ko'rsatishimdan mamnunman.
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={operator} />
            </div>
          </div>
          <div className="chat-bubble max-w-lg">
            Sizga qanday yordamim kerak. Agar qandaydir savolingiz bo'lsa
            marhamat. Tezt orada javob beraman...☺️
          </div>
        </div>
      </div>
      <form className="form-chat">
        <input
          type="text"
          placeholder="Yozishni boshlash..."
          className="input input-bordered w-full"
        />
        <button className="sendBtn">
          <img src={sendImg} />
        </button>
      </form>
    </>
  );
}

export default Chat;
