import { Heading } from "@chakra-ui/react";
import BlogsSlide from "./BlogsSlide";

const OurBlogSection = () => {
  return (
    <div className="custom-background">
      <div className="innerWidth">
        <Heading color="black">Our Blog</Heading>
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
