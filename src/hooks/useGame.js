/* eslint-disable react-hooks/exhaustive-deps */
import useData from "./Usedata";
// import axios from "axios";

const useGame = (SelectedGenre, SelectedPlatform) =>
  useData(
    "/games",
    { params: { genres: SelectedGenre?.id, platforms: SelectedPlatform?.id }},
    [SelectedGenre?.id, SelectedPlatform?.id]
  );

export default useGame;
