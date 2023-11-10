import "../css/NavBar.css";
import CallIcon from "../../public/icons/callIcon.svg";
function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-left">
          <a href="tel:7757">
            <img src={CallIcon} alt="This is call icon" />
            77 57
          </a>
          <div className="dash"></div>
          <p>
            Xizmatlarimiz haqida bepul ma’lumot olish uchun qo'ng'iroq qiling!
          </p>
          <div className="dash"></div>
          <p>Ish vaqti: 09:00 - 18:00</p>
        </div>
        <div className="navbar-right">
          <a href="#">YouTube</a>
          <a href="#">Telegram</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
