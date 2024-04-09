var elemento = document.getElementById("meuElemento");
var texto = document.createTextNode(" e estou testando a criação de nó de texto com DOM.");
elemento.appendChild(texto);

console.log(elemento);