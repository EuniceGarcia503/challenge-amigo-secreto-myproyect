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
    ///Limpia campo de entrada///
    limpiarElementHtml("nombreAmigos");
 }else{
   ///Actualiza lista de Amigos///
   listaAmigos.push(valorNombre);
   console.log(listaAmigos); 
   ///Limpia campo de entrada///
   limpiarElementHtml("nombreAmigos");
 }
 return;
}

//TAREA 3********** CREAR FUNCIÓN ACTUALIZAR LISTA DE AMIGOS************//

function actualizarListaHtml() {
    return;
}



//OTROS.*************************FUNCIONES REUTILIZABLES***********************//


//****Función : Limpiar casilla imput.****//
function limpiarElementHtml(elemento) {
    document.getElementById(elemento).value=""; 
}
