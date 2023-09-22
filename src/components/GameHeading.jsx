/* eslint-disable react/prop-types */
import { Heading } from "@chakra-ui/react";

const GameHeading = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} marginLeft={8} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
