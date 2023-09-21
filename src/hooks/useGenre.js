import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGenre = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    const controller = new AbortController();
   setLoading(true);  
    apiClient
      .get("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
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
  return { genres, error,isLoading  };
};

export default useGenre;
