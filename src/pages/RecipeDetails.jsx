import { useParams, useNavigate } from "react-router-dom";
import { useRecipeDetails } from "../hooks/useRecipes";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: recipe, isLoading } = useRecipeDetails(id);

  if (isLoading) return <div className="p-10 text-center">Loading...</div>;
  if (!recipe) return <div className="p-10 text-center">Recipe not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-2xl shadow-lg w-full object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {recipe.strMeal}
          </h1>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
            {recipe.strCategory}
          </span>
          <p className="mt-6 text-gray-700 leading-relaxed">
            {recipe.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
