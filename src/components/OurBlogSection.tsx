import BlogsSlide from "./BlogsSlide";

const OurBlogSection = () => {
  return (
    <div className="custom-background">
      <div className="innerWidth">
        <h1 className="font-quicksand heading" style={{ color: "black" }}>
          Our Blog
        </h1>
      </div>
      {/* <HStack className="innerWidth " paddingBottom={10}>
        {fakeBlogs.map((fakeBlog) => (
          <BlogCard key={fakeBlog.title} />
        ))}
      </HStack> */}
      <BlogsSlide />
    </div>
  );
};

export default OurBlogSection;
