//TAREA 1********** CREAR ARRAY PARA ALMACENAR LOS NOMBRES**********//

let listaAmigos = [];

//TAREA 2********** CREAR FUNCIÓN AGREGAR AMIGOS************//

 function agregarAmigo() {
  ///Captura valor de campo de entrada///
  let casilla = document.getElementById("nombreAmigos");
  let valorNombre = casilla.value;
  console.log(valorNombre);
  ///Validar elemento de entrada//
  if (valorNombre == "" || !/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(valorNombre)) {
    alert("Nombre inválido. Evita números y caracteres especiales.")

 }else{
   ///Actualiza lista de Amigos///
   listaAmigos.push(valorNombre);
   console.log(listaAmigos); 
 }
 return;
}