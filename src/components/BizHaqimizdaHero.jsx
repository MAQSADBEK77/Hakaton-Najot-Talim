function BizHaqimizdaHero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-left">
          <span>Toza Makon</span>
          <h1>Biz haqimizda</h1>
          <p>
            Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng
            ko'lamli xizmatlarni taqdim etamiz.
          </p>
          <div className="hero-links">
            <div className="hero-link">
              <p>Mijozlarimiz</p>
              <h3>2000+</h3>
            </div>{" "}
            <div className="hero-link">
              <p>Mijozlarimiz</p>
              <h3>2000+</h3>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <iframe
            src="https://www.youtube.com/embed/Kcm51TX_Z1o?si=QTtgsUItBD9TYJlS"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; clipboard-write; gyroscope; picture-in-picture;"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default BizHaqimizdaHero;
