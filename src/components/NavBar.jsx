/* eslint-disable react/prop-types */
import { Box, HStack, Image } from "@chakra-ui/react";
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
      <Box w="100px">
        <a href="/">
          <Image
            src={logo}
            alt="logo"
            boxSize={20}
            boxShadow={"2xl"}
            zIndex={20}
          />
        </a>
      </Box>

      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
