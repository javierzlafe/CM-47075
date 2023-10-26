

//estructura de un fetch


const url = "https://jsonplaceholder.typicode.com/posts/5"

fetch(url)
.then((respuesta)=> respuesta.json())
.then( (data)=> console.table(data)) //aca se trabaja con los datos recibidos, yo solo los muestro por consola



/* let url = "https://pokeapi.co/api/v2/pokemon?limit=20"


const pokemonContainer= document.getElementById("pokemon-container")


fetch(url)
  .then(response => response.json())
  .then(data => {
    const pokemons = data.results;

    pokemons.forEach((pokemon) => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          const pokemonElement = document.createElement('div');
          pokemonElement.innerHTML = `
            <h2>${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.front_default}" >
            <p>Tipo: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
          `;
          pokemonContainer.appendChild(pokemonElement);
        })
        .catch(error => {
          console.error('Ha ocurrido un error al obtener los datos del Pokémon:', error);
        });
    });
  }) */










  fetch("frutas.json")
  .then(response => response.json())
  .then(data =>{

    const frutas = data.frutas

    const frutasContainer = document.getElementById("frutas-container")
    frutasContainer.className=("pepe")

    frutas.forEach( fruta =>{
        const frutaElement = document.createElement("p")
        frutaElement.textContent = `
        Nombre: ${fruta.nombre}, Color: ${fruta.color}, Sabor: ${fruta.sabor}
        `
        frutasContainer.append(frutaElement)
    })




  })
