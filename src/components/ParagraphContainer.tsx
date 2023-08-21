import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ParagraphContainer = ({ children }: Props) => {
  return <Box className="sectionInnerWidth">{children}</Box>;
};

export default ParagraphContainer;
