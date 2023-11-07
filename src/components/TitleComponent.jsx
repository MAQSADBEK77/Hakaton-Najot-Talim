function TitleComponent({ span, title, param }) {
  return (
    <div className="title-component container">
      <span>{span}</span>
      <h2>{title}</h2>
      <p>{param}</p>
    </div>
  );
}

export default TitleComponent;
