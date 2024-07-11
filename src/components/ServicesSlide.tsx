// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const ServicesSlide = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  console.log(state);

  useEffect(() => {
    const yOffset = -100;

    const sectionRef = servicesRef.current;
    if (sectionRef) {
      const y =
        sectionRef.getBoundingClientRect().top + window.pageYOffset + yOffset;
      if (state === false) {
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [state]);

  return (
    <div className="innerWidth" id="service" ref={servicesRef}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        autoplay={{
          delay: 2100,
          disableOnInteraction: true,
        }}
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
