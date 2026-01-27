import { useState } from "react";
import { useRecipes } from "../hooks/useRecipes";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("chicken");
  const { data: recipes, isLoading, error } = useRecipes(search);

  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-orange-600">Easy Meal</h1>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Search (e.g. Pasta)..." 
            className="p-2 border rounded"
            onChange={(e) => setSearch(e.target.value)} // Updates the search state instantly
          />
        </div>
      </header>

      {isLoading && (
        <p className="text-center text-xl">Loading deliciousness...</p>
      )}
      {error && <p className="text-red-500">Error fetching recipes.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes?.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{recipe.strMeal}</h2>
              <p className="text-gray-500 italic mb-4">{recipe.strCategory}</p>
              <Link to={`/recipe/${recipe.idMeal}`}>
                <button className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
