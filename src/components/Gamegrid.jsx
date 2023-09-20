import { useState, useEffect } from "react";

import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
const Gamegrid = () => {
  const [game, setGame] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get("/games")
      .then((response) => {
        setGame(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
        
      });
  }, []);
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
