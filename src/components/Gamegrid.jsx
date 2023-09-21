/* eslint-disable react/prop-types */
import useGame from "../hooks/useGame";
import {  SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
const Gamegrid = ({SelectedGenre,SelectedPlatform}) => {
  const { Data, error, isLoading } = useGame(SelectedGenre,SelectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
    
      {error && <Text>{error}</Text>}
      {SelectedPlatform && Data.length === 0 && <Text paddingLeft={9} paddingTop={5}>No games found for this platform</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4}}
        gap={5}
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
