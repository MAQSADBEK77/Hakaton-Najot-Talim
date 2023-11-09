function HomiylarCorousel({ data }) {
  return (
    <div className="carousel rounded-box container">
      {data.map((item) => {
        return (
          <div className="carousel-item">
            <a href={item.href}>
              <img src={item.image} />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default HomiylarCorousel;
