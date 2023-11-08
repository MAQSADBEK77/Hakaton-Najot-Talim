import React from "react";
import HeroService from "../components/HeroService";
import NimaUchun from "../components/NimaUchun";
import TaklifCarousel from "../components/TaklifCarousel";

function Home() {
  return (
    <div>
      <HeroService />
      <NimaUchun
        topSpan="Nima uchun"
        topTitle="Bizni tanlashingiz shart"
        topParam="Xizmatlarimizdan foydalanishda quyidagi qulayliklarga va imkoniyatlarga ega bo’lasiz"
      />
      <TaklifCarousel
        title="Nimalarni taklif qilamiz"
        span="Biz siz uchun"
        param="Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun quyidagi xizmatlarni taklif qilamiz"
      />
    </div>
  );
}

export default Home;
