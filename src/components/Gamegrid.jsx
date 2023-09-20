import useGame from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "./GameCards";
const Gamegrid = () => {
  const { game, error } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2 , lg:3,xl:4}} gap={10} padding={10}>
        {game.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
