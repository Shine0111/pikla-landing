// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";
import { useNavigate } from "react-router-dom";

const ServicesSlide = () => {
  const navigate = useNavigate();
  return (
    <div className="innerWidth" id="service">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
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
      >
        {services.map((service) => (
          <SwiperSlide key={service.title}>
            <ServiceCard
              heading={service.title}
              onClick={() => navigate(service.to)}
              onCategoryClick={(category) =>
                navigate(service.to, { state: category })
              }
              categories={service.categories}
              background={service.background}
              color={service.color}
              arrowColor={service.arrowColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlide;
