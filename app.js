let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = ['com','net','us', 'io','on']; //Hack 'on'

for (let i = 0; i < ext.length; i++) { //Recorre el array de extensiones
  for (let j = 0; j < pronoun.length; j++) { //Recorre el array de pronombres
    for (let k = 0; k < adj.length; k++) { //Recorre el array de adjetivos 
      for (let l = 0; l < noun.length; l++) { //Recorre el array de sustantivos
        if (noun[l].substring(noun[l].length - ext[i].length) === ext[i]) { //Si el final del sustantivo es estrictamente igual a la extension
            //Se concatena pronombre adjetivo y sustantivo aplicando el hack
            console.log(pronoun[j] + adj[k] + noun[l].substring(0, noun[l].length - ext[i].length) + "." + ext[i]);
        }else{
            //Se concatena pronombre adjetivo y sustantivo
            console.log(pronoun[j] + adj[k] + noun[l] + "." + ext[i]); 
        }
        
      }
    }
  }
}
