var text = prompt('Enter the quote you want to cipher');
if(text !== '' && text.replace(/[^0-9]/g, ' ') !== text){ // si el texto es diferente de 0, o si ingresa algun valor númerico lo reemplaza por vacio y vuelve a llamar al prompt
  cipher(text); //Aquí llamamos a la función a ejecutar
}
else{
   prompt('Error, please enter the quote again'); //si lo anterior no se cumple, se llamará nuevamente al prompt
  var text = prompt('Enter the quote to cipher');
}  

function cipher(phrase){ //Aqui creo la función de cifrar
  var phraseCipher = ""; //se crea una variable donde se va a guardar el resultado de la frase cifrada
  
  for(i=0; i < phrase.length; i++){//Aqui vamos a recorrer cada uno de los caracteres
    var numAscii = phrase.charCodeAt(i);//aquí se están convirtiendo los caracteres al codigo ASCII
    
    if(numAscii >= 65 && numAscii <= 90 ){ //Aquí estoy declarando la condicional de que si el codigo ASCII es >= 65 (que es la A) y <= 90 (que es la Z)
      var cipherNumAscii = ((numAscii - 65 + 33) % 26) + 65; //aquí estoy haciendo la operación establecida en el ejercicio donde se tiene que mover 33 caracteres hacia la derecha
    }else{
      var cipherNumAscii = ((numAscii - 97 + 33) % 26) + 97; //es la mimma operación pero partiendo de la Z
    }
    var newLetter = String.fromCharCode(cipherNumAscii); //esta variante contiene la nueva letra que se creo al recorrer 33 veces 
     phraseCipher += newLetter; //aquí estoy diciendo que la nueva frase cifrada es igual a la nueva letra
  }
  return phraseCipher;
}

function decipher(phrase){ //esta es la función de decifrado
  var phraseCipher = ""; 
  
  for(i=0; i < phrase.length; i++){
    var numAscii = phrase.charCodeAt(i);
    console.log(numAscii);
    
    if(numAscii >= 65 && numAscii <= 90 ){ //esto es lo contrario, se supone que el texto que ingresan está en codigo ASCCI, entonces en lugar de ser la letra real, está movida 33 espacios, por eso hay que restarle estos 33 espacios
      var cipherNumAscii = ((numAscii + 65 - 33) % 26) + 65;
    }else{
      var cipherNumAscii = ((numAscii + 97 + 33) % 26) + 97;
    }
    var newLetter = String.fromCharCode(cipherNumAscii);
     phraseCipher += newLetter;
  }
  return phraseCipher;
}