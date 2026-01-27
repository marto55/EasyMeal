import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Hook to fetch recipes based on a search term
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

// This is an additional hook to fetch details of a single recipe by ID
export const useRecipeDetails = (id) => {
  return useQuery({
    queryKey: ['recipe', id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      return data.meals[0]; 
    },
    enabled: !!id,
  });
};
