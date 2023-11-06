import "../css/NavBar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-left">
          <a href="tel:7757">
            <img src="./public/icons/callicon.svg" alt="This is call icon" />
            77 57
          </a>
          <div className="dash"></div>Xizmatlarimiz haqida bepul ma’lumot olish
          uchun qo'ng'iroq qiling!
          <div className="dash"></div>
          Ish vaqti: 09:00 - 18:00
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
