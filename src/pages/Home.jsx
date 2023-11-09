import React from "react";
import HeroService from "../components/HeroService";
import NimaUchun from "../components/NimaUchun";
import TaklifCarousel from "../components/TaklifCarousel";
import { carts } from "../data/data";
import IlovaComponent from "../components/IlovaComponent";
import MijozlarNimaDeydi from "../components/MijozlarNimaDeydi";
import Homiylar from "../components/Homiylar";
import SavollaringizBormi from "../components/SavollaringizBormi";

function Home() {
  return (
    <>
      <HeroService />
      <NimaUchun
        topSpan="Nima uchun"
        topTitle="Bizni tanlashingiz shart"
        topParam="Xizmatlarimizdan foydalanishda quyidagi qulayliklarga va imkoniyatlarga ega bo’lasiz"
      />
      <TaklifCarousel
        data={carts}
        title="Nimalarni taklif qilamiz"
        span="Biz siz uchun"
        param="Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun quyidagi xizmatlarni taklif qilamiz"
      />
      <IlovaComponent />
      <MijozlarNimaDeydi />
      <Homiylar />
      <footer>
        <SavollaringizBormi />
        
      </footer>
    </>
  );
}

export default Home;
