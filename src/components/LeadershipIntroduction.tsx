import { Heading, Stack } from "@chakra-ui/react";

const LeadershipIntroduction = () => {
  return (
    <Stack
      marginY="3rem"
      spacing={5}
      justifyContent="space-between"
      alignItems="flex-start"
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
      }}
    >
      <Heading>Pikla Leadership</Heading>
      <p>
        {" "}
        Pikla was started by name, who wanted to solve the problem of <br />
        the region’s lack of reliable transportation. In date, name became{" "}
        <br />
        Pikla’s third co-founder, and together, over a decade, they led the{" "}
        <br />
        company into 14 countries, and hired over 12 thousand colleagues to{" "}
        <br />
        bring Pikla’s purpose to life.
      </p>
    </Stack>
  );
};

export default LeadershipIntroduction;
