import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Button
      size={"sm"}
      variant={"ghost"}
      textAlign={"center"}
      onClick={toggleColorMode}>
      <Icon fontSize={"20"}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Icon>
    </Button>
  );
};

export default ColorModeSwitch;
