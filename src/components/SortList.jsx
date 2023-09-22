import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortList = () => {

    return (
    <Box paddingLeft={5} paddingTop={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort by
        </MenuButton>
        <MenuList>
          <MenuItem>Sort by</MenuItem>
          <MenuItem>Release Date</MenuItem>
          <MenuItem>Rating</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortList;
