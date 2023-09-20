import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      paddingTop={"0"}
      paddingBottom={"0"}
      paddingLeft={"20px"}
      paddingRight={"20px"}>
      <Image src={logo} alt="logo" boxSize="70px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
