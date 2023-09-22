/* eslint-disable react/prop-types */
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ onSearch }) => {
  const Searchref = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (Searchref.current) onSearch(Searchref.current.value);
      }}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={Searchref}
          borderRadius={20}
          placeholder="Search Games"
          variant={"filled"}></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
