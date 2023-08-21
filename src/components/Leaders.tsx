import { Stack } from "@chakra-ui/react";
import leaders from "../data/leaders";
import ProfileCard from "./ProfileCard";

const Leaders = () => {
  return (
    <Stack
      spacing={15}
      direction={{
        base: "row",
      }}
      flexWrap="wrap"
      justifyContent="center"
    >
      {leaders.map((leader) => (
        <ProfileCard
          key={leader.name}
          heading={leader.name}
          imageSrc={leader.picture}
          position={leader.position}
          onClick={() => console.log("clicked", leader.name)}
        />
      ))}
    </Stack>
  );
};

export default Leaders;
