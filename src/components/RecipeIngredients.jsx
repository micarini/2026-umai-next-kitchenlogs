const RecipeIngredients = ({ ingredients }) => {
  return (
    <div>
      <h2 className="[font-family:var(--font-oswald)] uppercase text-xl font-bold mb-6 tracking-widest">Ingredients</h2>
      <ul className="space-y-3">
        {ingredients && ingredients.length > 0 ? (
          ingredients.map((ingredient, idx) => (
            <li key={idx} className="flex items-center gap-3 leading-7">
              <span className="text-[#93a74d] font-bold shrink-0">○</span>
              <span>{ingredient}</span>
            </li>
          ))
        ) : (
          <li>No ingredients available</li>
        )}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
