import { HStack, Heading } from "@chakra-ui/react";
import fakeBlogs from "../data/fake-blogs";
import BlogCard from "./BlogCard";

const OurBlogSection = () => {
  return (
    <div className="custom-background">
      <div className="innerWidth">
        <Heading color="black">Our Blog</Heading>
      </div>
      <HStack className="innerWidth " paddingBottom={10}>
        {fakeBlogs.map((fakeBlog) => (
          <BlogCard key={fakeBlog.title} />
        ))}
      </HStack>
    </div>
  );
};

export default OurBlogSection;
