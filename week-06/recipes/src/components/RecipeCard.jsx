const RecipeCard = ({ recipe }) => {
  return (
    <div key={recipe.id} className='card bg-neutral w-96 shadow-xl mb-4'>
      <figure>
        <img src={recipe.image} alt={recipe.name} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {recipe.name}
          <div className='badge badge-secondary'>{recipe.difficulty}</div>
        </h2>
        <p>Serves: {recipe.servings}</p>
        <p>Cooking time: {recipe.prepTimeMinutes + recipe.cookTimeMinutes}</p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Rating: {recipe.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
