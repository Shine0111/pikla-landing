// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import fakeBlogs from "../data/fake-blogs";
import BlogCard from "./BlogCard";

const BlogsSlide = () => {
  return (
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
      className="innerWidth margin-bottom"
    >
      {fakeBlogs.map((fakeBlog) => (
        <SwiperSlide key={fakeBlog.title}>
          <BlogCard
            imageSrc={fakeBlog.src}
            heading={fakeBlog.title}
            description={fakeBlog.description}
            onClick={() => console.log("clicked", fakeBlog.title)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogsSlide;
