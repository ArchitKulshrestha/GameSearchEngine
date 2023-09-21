import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGame = () => {
  const [game, setGame] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    const controller = new AbortController();
   setLoading(true);  
    apiClient
      .get("/games", { signal: controller.signal })
      .then((response) => {
        setGame(response.data.results);
        setLoading(false);
      })

      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message)
        setLoading(false);
        
      });
    return () => {
      controller.abort();
    };
   
  }, []);
  return { game, error,isLoading  };
};

export default useGame;
