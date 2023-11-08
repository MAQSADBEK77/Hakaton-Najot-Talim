function MiniCart({ imgSrc, title, param }) {
  return (
    <div className="mini-cart">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{param}</p>
    </div>
  );
}

export default MiniCart;
