// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import BlogCard from "./BlogCard";
import fakeCaptains from "../data/fake-captains";

const CaptainsSlide = () => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className=" margin-bottom captains-slide-innerWidth"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
    >
      {fakeCaptains.map((fakeCaptain) => (
        <SwiperSlide key={fakeCaptain.name}>
          <BlogCard
            imageSrc={fakeCaptain.picture}
            imageBorderRadius="full"
            imageBoxSize="150px"
            heading={fakeCaptain.name}
            description={fakeCaptain.comment}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaptainsSlide;
