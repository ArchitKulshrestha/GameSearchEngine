import useGame from "../hooks/useGame";
import { Text } from "@chakra-ui/react";
const Gamegrid = () => {
  const { game, error } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {game.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Gamegrid;
