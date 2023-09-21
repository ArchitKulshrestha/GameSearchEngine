/* eslint-disable react-hooks/exhaustive-deps */
import useData from "./Usedata";
// import axios from "axios";

const useGame = (SelectedGenre) => useData("/games",{params:{genres:SelectedGenre?.id}},[SelectedGenre?.id]);

export default useGame;
