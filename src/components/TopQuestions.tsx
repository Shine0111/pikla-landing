import { Box, Heading } from "@chakra-ui/react";
import CustomAccordion from "./CustomAccordion";
import fakeTopQuestions from "../data/fake-top-questions";

const TopQuestions = () => {
  return (
    <Box
      className="top-questions-innerWidth"
      background="var(--dark-blue)"
      borderRadius={20}
    >
      <Heading textAlign="center" color="white">
        Top Questions
      </Heading>
      {fakeTopQuestions.map((fakeTopQuestion) => (
        <CustomAccordion
          key={fakeTopQuestion.question}
          heading={fakeTopQuestion.question}
          description={fakeTopQuestion.question}
        />
      ))}
    </Box>
  );
};

export default TopQuestions;
