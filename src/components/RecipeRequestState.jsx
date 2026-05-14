const RecipeRequestState = ({ loading, error, notFound, errorMessage }) => {
  if (loading) {
    return <p className="text-sm font-semibold uppercase">Loading...</p>;
  }

  if (error) {
    return <p className="text-sm font-semibold text-red-700">{errorMessage}</p>;
  }

  if (notFound) {
    return <p className="text-sm font-semibold uppercase">Recipe not found.</p>;
  }

  return null;
};

export default RecipeRequestState;