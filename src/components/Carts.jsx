import BorderGreenBtn from "./BorderGreenBtn";

function Carts({ data }) {
  return (
    <div className="carts">
      {data.map((cart) => {
        return (
          <div key={cart.id} className="cart">
            <img src={cart.img.cart1} alt={cart.title} />
            <h2>{cart.title}</h2>
            <p>{cart.param}</p>
            <BorderGreenBtn title="Batafsil" to={"Xizmatlar/" + cart.id} />
          </div>
        );
      })}
    </div>
  );
}

export default Carts;
