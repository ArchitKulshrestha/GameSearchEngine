/* eslint-disable react/prop-types */
import { Menu, MenuButton, Button, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = ({OnSelectPlatform,SelectedPlatform}) => {
    const { Data,error} = usePlatform();
    if  (error) return null; 
  return (
      
    <Box paddingLeft={8} paddingTop={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {SelectedPlatform?.name || "Platform"}
        </MenuButton>
        <MenuList >
        {Data.map(platform=><MenuItem  onClick={()=>OnSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
