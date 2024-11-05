import React, { useRef } from "react";
import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // Create a ref for the Swiper instance
  const navigate = useNavigate()
  const swiperRef = useRef(null);

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
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store the swiper instance in the ref
          }}
        >
          {[{
            title: "Rap songs",
            imgSrcs: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s"]
          }, {
            title: "ExYu songs",
            imgSrcs: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s"]
          }, {
            title: "Pop songs",
            imgSrcs: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s"]
          }].map((slide, index) => (
            <SwiperSlide
              key={index}
              onClick={() => swiperRef.current.slideTo(index)} // Slide to this index on click
            >
              <div className="slajd">
                <h1>{slide.title}</h1>
                <div className="slideContent">
                  {slide.imgSrcs.map((src, i) => (
                      <img onClick={(e) => {
                        const list = [...e.target.parentElement.parentElement.parentElement.classList]
                        if(list.includes("swiper-slide-active")){
                          navigate("/song/id")
                        }
                      }} src={src} alt="" key={i} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="songsHome">
        {/* Add your songs list here */}
      </div>
    </div>
  );
}
