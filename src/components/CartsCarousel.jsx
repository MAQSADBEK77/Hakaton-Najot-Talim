import BorderGreenBtn from "./BorderGreenBtn";

function CartsCarousel({ data }) {
  return (
    <div className="container carousel carousel-end rounded-box">
      {data.map((item) => {
        return (
          <div key={item.id} className="carousel-item flex flex-col">
            <img src={item.img.cart1} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.param}</p>
            <BorderGreenBtn title="Batafsil" to={"xizmatlar/" + item.id} />
          </div>
        );
      })}
    </div>
  );
}

export default CartsCarousel;
