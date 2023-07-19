function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // se ejecuta un bucle 
    while (currentIndex != 0) {
  
      // funcion de mezclar tarjetas
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--; //resta la unidad
  
      // 
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
export default shuffle; 
//exporta un unico valor 
//puedes cambiar el nombre de la funcion solo al importarla


//Comparar las 2 cartas dentro de la variable
//Si son iguales hacer que permanezcan descubiertas
//Y permitir destapar otras 2
//Si son diferentes volver a cubrir
//Y permitir destapar otras 2
