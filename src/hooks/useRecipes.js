import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useRecipes = (searchTerm = "chicken") => {
  return useQuery({
    queryKey: ["recipes", searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
      );
      return data.meals;
    },
    // This prevents the API from firing if the search is empty
    enabled: !!searchTerm,
  });
};


