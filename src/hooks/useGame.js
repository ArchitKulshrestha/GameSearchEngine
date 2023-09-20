import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGame = () => {
    const [game, setGame] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/games", { signal: controller.signal })
      .then((response) => {
        setGame(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        
      });
      return () => {
        controller.abort();
      }
  }, []);
    return {game,error}
 
}

export default useGame 