// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import ServiceCard from "./ServiceCard";
import services from "../data/services";

const ServicesSlide = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="innerWidth"
    >
      {services.map((service) => (
        <SwiperSlide key={service.title}>
          <ServiceCard
            heading={service.title}
            onClick={() => console.log("Clicked", service.title)}
            categories={service.categories}
          />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default ServicesSlide;
