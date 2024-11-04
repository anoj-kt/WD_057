let counter = 1;

function fetchSinglePokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    .then((res) => res.json())
    .then((pokeData) => {
      const pokemon = {
        id: pokeData.id,
        name: pokeData.name,
      };

      console.log(pokemon);
      counter++;
    })
    .catch((err) => console.error('Something went wrong!'));

  if (counter === 150) {
    clearInterval(fetchPokeData);
  }
}

const fetchPokeData = setInterval(fetchSinglePokemon, 1000);
