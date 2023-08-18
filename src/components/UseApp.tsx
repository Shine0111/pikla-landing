import { Button, CloseButton, HStack, IconButton } from "@chakra-ui/react";
import PiklaApp from "./PiklaApp";
import { useState } from "react";

const UseApp = () => {
  const [visible, setVisibility] = useState(true);

  const closeMessage = () => {
    setVisibility(false);
  };

  if (visible === false) return null;

  return (
    <HStack
      className="innerWidth"
      backgroundColor="var(--dark-blue)"
      justifyContent="space-between"
      zIndex={999}
      borderRadius={20}
      marginBottom={3}
    >
      <PiklaApp />
      <HStack>
        <Button fontSize="sm" paddingY={0.5} marginX={3}>
          Use app
        </Button>
        <IconButton
          aria-label="close use app"
          icon={<CloseButton />}
          borderRadius={50}
          size="sm"
          onClick={closeMessage}
        />
      </HStack>
    </HStack>
  );
};

export default UseApp;
