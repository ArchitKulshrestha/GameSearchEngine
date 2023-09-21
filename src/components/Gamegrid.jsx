/* eslint-disable react/prop-types */
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
const Gamegrid = ({SelectedGenre}) => {
  const { Data, error, isLoading } = useGame(SelectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
    <Heading padding={2} paddingLeft= {6} fontSize={"4xl"}>Games</Heading>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4}}
        gap={7}
        padding={8}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {Data.map((data) => (
          <GameCards key={data.id} game={data} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
