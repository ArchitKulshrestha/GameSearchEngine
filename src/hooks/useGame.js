/* eslint-disable react-hooks/exhaustive-deps */
import useData from "./Usedata";
// import axios from "axios";

const useGame = (gameQuery) =>
  useData(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGame;
