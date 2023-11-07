import React from "react";
import HeroService from "../components/HeroService";
import NimaUchun from "../components/NimaUchun";

function Home() {
  return (
    <div>
      <HeroService />
      <NimaUchun
        topSpan="Nima uchun"
        topTitle="Bizni tanlashingiz shart"
        topParam="Xizmatlarimizdan foydalanishda quyidagi qulayliklarga va imkoniyatlarga ega bo’lasiz"
      />
    </div>
  );
}

export default Home;
