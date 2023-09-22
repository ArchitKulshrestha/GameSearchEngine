/* eslint-disable react/prop-types */
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = ({ onSearch }) => {
  return (
    <HStack
      paddingTop={"0"}
      paddingBottom={"0"}
      paddingLeft={"20px"}
      paddingRight={"20px"}>
      <Image src={logo} alt="logo" boxSize="70px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
