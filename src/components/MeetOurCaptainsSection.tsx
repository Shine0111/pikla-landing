import CaptainsSlide from "./CaptainsSlide";

const MeetOurCaptainsSection = () => {
  return (
    <div className="custom-background">
      <div className="innerWidth">
        <CaptainsSlide />
      </div>
      {/* <HStack className="innerWidth " paddingBottom={10}>
        {fakeBlogs.map((fakeBlog) => (
          <BlogCard key={fakeBlog.title} />
        ))}
      </HStack> */}
    </div>
  );
};

export default MeetOurCaptainsSection;
