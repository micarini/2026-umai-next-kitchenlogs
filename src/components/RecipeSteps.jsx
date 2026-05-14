const RecipeSteps = ({ instructions }) => {
  return (
    <div>
      <h2 className="[font-family:var(--font-oswald)] uppercase text-xl font-bold mb-6 tracking-widest">Steps</h2>
      <ol className="space-y-4">
        {instructions && instructions.length > 0 ? (
          instructions.map((instruction, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#93a74d] text-white flex items-center justify-center font-bold text-sm leading-none">
                {idx + 1}
              </span>
              <span className="leading-7">{instruction}</span>
            </li>
          ))
        ) : (
          <li>No instructions available</li>
        )}
      </ol>
    </div>
  );
};

export default RecipeSteps;
