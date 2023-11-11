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
        <details className="dropdown">
          <summary className="m-1 btn">
            {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-60 gap-4">
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
          </ul>
        </details>
      <div className="icon-y"></div>
      <form>
        <img src={SearchSvg} />
        <input type="search" placeholder="Qidirish" />
      </form>
    </div>
  );
}

export default FilterNavBar;
