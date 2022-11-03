import App from './components/App.js';
 
document.getElementById('root').appendChild(App());

//importar data pokemon.js;
import dataPokemon from "./data/pokemon/pokemon.js";



//usar array de pokemon de los datos que deben hacer match
console.log (dataPokemon)
const data = [...dataPokemon.items,...dataPokemon.items]
console.log (data)

const pokemons = data.forEach ((pokemon)=>{
  const namesPokemons = document.getElementById ("namesPokemos");
  const etiquetaP = document.createElement ("p")
   etiquetaP.textContent= (pokemon.id)
   
  console.log (pokemon)  
  
  const imagePoke = document.createElement('img');
  imagePoke.setAttribute("src", pokemon.image);
  namesPokemons.append(etiquetaP, imagePoke);

  //que espero y donde viene ? quiero que venga?

})

console.log (pokemons) 

