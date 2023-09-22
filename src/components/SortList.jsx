/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortList = ({ onSelectSortOrder, sortOrderName }) => {
  const sortOrder = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release Date",
    },
    {
      value: "-matacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average Rating",
    },
  ];
  const currentSortOrder = sortOrder.find(
    (order) => order.value === sortOrderName
  );

  return (
    <Box paddingLeft={5} paddingTop={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrder.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}>
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortList;
