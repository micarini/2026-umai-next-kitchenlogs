import axios from 'axios';
import recipes from '@/data/dummy';
import Navbar from '@/components/Navbar';
import RecipeMetaGrid from '@/components/RecipeMetaGrid';
import RecipeIngredients from '@/components/RecipeIngredients';
import RecipeSteps from '@/components/RecipeSteps';
import RecipeTags from '@/components/RecipeTags';

export default async function AboutRecipePage({ params }) {
  const { id: idParam } = await params;
  const id = parseInt(idParam, 10);
  let recipe = null;

  // fetch a la API primero
  try {
    const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
    recipe = {
      name: response.data.name,
      image: response.data.image,
      time: response.data.prepTimeMinutes,
      level: response.data.difficulty,
      cuisine: response.data.cuisine,
      servings: response.data.servings,
      calories: response.data.caloriesPerServing,
      rating: response.data.rating,
      ingredients: response.data.ingredients,
      instructions: response.data.instructions,
      tags: response.data.tags,
    };
  } catch (error) {
    // Fallback al dummy.js si la api falla
    const fallbackRecipe = recipes.find((item) => item.id === id);
    if (fallbackRecipe) {
      recipe = fallbackRecipe;
    }
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <section className="p-4">
        <Navbar variant="green" showBack={true} />
      </section>

      <main className="px-4 py-8 md:px-10 md:py-14">
        <section className="grid gap-8 md:grid-cols-[40%_60%]">
          <figure className="overflow-hidden rounded-2xl">
            <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover rounded-2xl" />
          </figure>

          <article>
            <p className="uppercase text-xs font-bold tracking-widest" style={{ opacity: 0.7 }}>Recipes</p>
            <h1 className="[font-family:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase mb-4 leading-tight">{recipe.name}</h1>

            <RecipeMetaGrid recipe={recipe} />
            <RecipeTags tags={recipe.tags} />
          </article>
        </section>

        <section className="grid mt-8 gap-12 md:grid-cols-2 border-t border-[#101010]/[0.18] pt-8">
          <RecipeIngredients ingredients={recipe.ingredients} />
          <RecipeSteps instructions={recipe.instructions} />
        </section>
      </main>
    </div>
  );
}
