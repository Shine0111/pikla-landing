import { Box, Heading } from "@chakra-ui/react";
import CustomAccordion from "./CustomAccordion";
import { Question } from "../data/fake-top-questions";

interface Props {
  topQuestions: Question[];
}

const TopQuestions = ({ topQuestions }: Props) => {
  return (
    <Box
      className="top-questions-innerWidth"
      background="var(--dark-blue)"
      borderRadius={20}
    >
      <Heading textAlign="center" color="white">
        Top Questions
      </Heading>
      {topQuestions.map((topQuestion) => (
        <CustomAccordion
          key={topQuestion.question}
          heading={topQuestion.question}
          description={topQuestion.answer}
        />
      ))}
    </Box>
  );
};

export default TopQuestions;
