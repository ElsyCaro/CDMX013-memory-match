import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';
import dataPokemon from "./data/pokemon/pokemon.js";
import mezclar from './utils/shuffle.js';
//Imprime la data en mi root es de html 
const root = document.getElementById('root');
//duplicando la data 
const data = [...dataPokemon.items,...dataPokemon.items]
//donde se hacer el areglo de las cartas 
let clickedCards = [];
let countCards = [];// solo las dos tarjetas  

mezclar(data).forEach ((pokemon)=>{
//Contenido de tarjetas 
  const div = document.createElement("div");
  div.classList = "container"
 div.setAttribute("id",pokemon.id);
 const divBack = document.createElement ("div");
 divBack.setAttribute("id",pokemon.id);
 divBack.classList = "divBack" 
 const namesPokemons = document.createElement ("h2")

  namesPokemons.textContent= (pokemon.id)
   const imagePoke = document.createElement('img');
   imagePoke.classList = "imagePoke"
  imagePoke.setAttribute("src", pokemon.image);
  
  //funcion hace que solo se destapen dos cartas
  divBack.addEventListener('click',()=>{
  divBack.style.display = "none" //propiedad que se le dio en css la quite al dar click
   countCards.push(div);
  console.log(namesPokemons);
  clickedCards.push(divBack); 
  console.log(clickedCards)
  //if devolver algun valor que se cumple tu funcion 
  //else devuelve si no se cumple lo que tu indiques 
  if (clickedCards.length === 2 ){
    console.log(clickedCards[0].getAttribute("id"))
      if(clickedCards[0].getAttribute("id") === clickedCards[1].getAttribute("id")){
    console.log("match")
      }else{
        clickedCards[0].style.display = "block"
        clickedCards[1].style.display= "block"
            
         
          
      }
      clickedCards = [];
  }
  

});



//se hicieron nodos 
div.append(imagePoke, namesPokemons,divBack,);

  root.appendChild (div);
//aparece en la pantalla
});  


// .getElementsByClassName("") imprime 
//traer los elementos mediante su clase para escuchar su el evento click
//cambio de imagen dentro del escuchador del click 
//rederisar 
//imagePoke.classList.toggle('hidden');
    //imagePoke.classList.toggle('hidden');
    //divBack.push(pokemon.id);
    //imagePoke.push('pokemon'+ root);

  
 //si ya tengo destapadas esas dos tarjetas saber si hacen match y si no taparlas de nuevo 
  //van

  //numeros = numeros.sort (function(){return Math.random() -0.3})

//const random = Math.floor(Math.random() * data.length);
//const shuffleCards = Math.floor(Math.floor) * data.length);
//console.log();