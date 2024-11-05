import React, { useRef } from "react";
import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link, useNavigate } from "react-router-dom";
import SongItem from "../../components/SongItem/SongItem";

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
            imgSrcs: ["https://upload.wikimedia.org/wikipedia/bs/2/2f/%281981%29_Oziljak.jpg","https://static.kupindoslike.com/Crvena-Jabuka-%E2%80%93-Za-Sve-Ove-Godine_slika_O_142613141.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkGUvRjAdv12SxW6SmseSBGQxUch3N6jEIw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s"]
          }, {
            title: "ExYu songs",
            imgSrcs: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkGUvRjAdv12SxW6SmseSBGQxUch3N6jEIw&s","https://static.kupindoslike.com/Crvena-Jabuka-%E2%80%93-Za-Sve-Ove-Godine_slika_O_142613141.jpg","https://upload.wikimedia.org/wikipedia/bs/2/2f/%281981%29_Oziljak.jpg"]
          }, {
            title: "Pop songs",
            imgSrcs: ["https://static.kupindoslike.com/Crvena-Jabuka-%E2%80%93-Za-Sve-Ove-Godine_slika_O_142613141.jpg","https://upload.wikimedia.org/wikipedia/bs/2/2f/%281981%29_Oziljak.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH-P7zwfBJ1QOvBD644sVlVJzHaYytdNolw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkGUvRjAdv12SxW6SmseSBGQxUch3N6jEIw&s"]
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

      <section className="songsHome">
        <h1>Songs</h1>
        <div className="listSongs">
          {[1,2,3,4,5].map((song, i) => <SongItem key={i} i={i} />)}
        </div>
          <Link to="/songs" className="moreBtn">More...</Link>
      </section>
    </div>
  );
}
