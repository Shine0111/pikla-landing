import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import captains from "../data/fake-captains";
import ProfileCard from "./ProfileCard";

const CaptainsSlide = () => {
  return (
    <Swiper
      onSlideChange={() => console.log("slide change")}
      slidesPerView={4}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      className="innerWidth"
    >
      {captains.map((captain) => (
        <SwiperSlide key={captain.name}>
          <ProfileCard
            imageSrc={captain.picture}
            heading={captain.name}
            position={captain.comment}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaptainsSlide;
