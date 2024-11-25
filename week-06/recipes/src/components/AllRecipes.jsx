import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import Error from './Error';
import { fetchRecipes } from '../data/getRecipes';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const allRecipes = async () => {
      const fetchedRecipes = await fetchRecipes();

      if (fetchedRecipes.error) {
        setErrorMsg('something went wrong');
        setIsLoading(false);
      } else {
        setRecipes(fetchedRecipes);
        setIsLoading(false);
      }
    };

    allRecipes();
  }, []);

  return (
    <div>
      {errorMsg && <Error errorMsg={`We couldn't fetch`} />}
      {isLoading && (
        <span className='loading loading-spinner loading-lg'></span>
      )}
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};

export default AllRecipes;
