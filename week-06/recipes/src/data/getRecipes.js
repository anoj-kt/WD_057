const fetchRecipes = async () => {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();

    return data.recipes;
  } catch (e) {
    return {
      error: 'Fetch failed!',
    };
  }
};

export { fetchRecipes };
