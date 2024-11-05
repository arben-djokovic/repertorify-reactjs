import React from "react";
import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div className="home page">
      <section className="swiperSection">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          initialSlide={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slajd">
              <h1>Rap songs</h1>
              <div className="slideContent">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWbEVkYE-DQRi7-ZmDfJn_FQZ_yfJOSGCeA&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slajd">
              <h1>ExYu songs</h1>
              <div className="slideContent">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWbEVkYE-DQRi7-ZmDfJn_FQZ_yfJOSGCeA&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slajd">
              <h1>Pop songs</h1>
              <div className="slideContent">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWbEVkYE-DQRi7-ZmDfJn_FQZ_yfJOSGCeA&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="songsHome">
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
        <h1>Songs</h1>
      </div>
    </div>
  );
}
