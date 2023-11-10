import SearchSvg from "../../public/icons/search.svg";
function FilterNavBar() {
  return (
    <div className="filter-navbar container">
      <div className="filter-navbar-btns">
        <button className="activeBtn">
          Barchasi <span>32</span>
        </button>{" "}
        <button>
          Tozalash <span></span>
        </button>
        <button>
          Dizinfeksiya <span></span>
        </button>
        <button>
          Yuvish <span></span>
        </button>
        <button>
          Oshxona <span></span>
        </button>
        <button>
          Uy va ofis <span></span>
        </button>
        <button>
          Bog’ va yashil maydonlar <span></span>
        </button>
      </div>
      <div className="icon-y"></div>
      <form>
        <img src={SearchSvg} />
        <input type="search" placeholder="Qidirish" />
      </form>
    </div>
  );
}

export default FilterNavBar;
