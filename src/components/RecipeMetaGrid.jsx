const RecipeMetaGrid = ({ recipe }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 mr-8">
      <div className="p-4 rounded-lg" style={{ background: 'var(--card-bg)' }}>
        <p className="uppercase text-xs font-bold tracking-widest" style={{ opacity: 0.6 }}>Prep Time</p>
        <p className="text-xl font-bold mt-1">{recipe.time || 'N/A'} min</p>
      </div>
      <div className="p-4 rounded-lg" style={{ background: 'var(--card-bg)' }}>
        <p className="uppercase text-xs font-bold tracking-widest" style={{ opacity: 0.6 }}>Serves</p>
        <p className="text-xl font-bold mt-1">{recipe.servings || 'N/A'}</p>
      </div>
      <div className="p-4 rounded-lg" style={{ background: 'var(--card-bg)' }}>
        <p className="uppercase text-xs font-bold tracking-widest" style={{ opacity: 0.6 }}>Difficulty</p>
        <p className="text-xl font-bold mt-1">{recipe.level || 'N/A'}</p>
      </div>
      {recipe.cuisine && (
        <div className="p-4 rounded-lg" style={{ background: 'var(--card-bg)' }}>
          <p className="uppercase text-xs font-bold tracking-widest" style={{ opacity: 0.6 }}>Cuisine</p>
          <p className="text-xl font-bold mt-1">{recipe.cuisine}</p>
        </div>
      )}
      {recipe.calories && (
        <div className="p-4 rounded-lg" style={{ background: 'var(--card-bg)' }}>
          <p className="uppercase text-xs font-bold tracking-widest" style={{ opacity: 0.6 }}>Calories</p>
          <p className="text-xl font-bold mt-1">{recipe.calories} per serving</p>
        </div>
      )}
      {recipe.rating && (
        <div className="p-4 rounded-lg" style={{ background: 'var(--card-bg)' }}>
          <p className="uppercase text-xs font-bold tracking-widest" style={{ opacity: 0.6 }}>Rating</p>
          <p className="text-xl font-bold mt-1">{recipe.rating} / 5</p>
        </div>
      )}
    </div>
  );
};

export default RecipeMetaGrid;
