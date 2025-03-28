//TAREA 1********** CREAR ARRAY PARA ALMACENAR LOS NOMBRES**********//

let listaAmigos = [];

///Modifica el título del encabezado///
tituloHead("h1","Amigo Secreto Online");

///Agrega descripción del juego en el encabezado//
tituloHead("p","¡ Con pocos clics y sin papelitos !");

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
   ///Agregamos elemento a la lista ul cada vez que ingresamos un nombre válido///
   actualizarListaHtml();
   ///Limpia campo de entrada///
   limpiarElementHtml("nombreAmigos");
 }
 return;
}

//TAREA 3********** CREAR FUNCIÓN ACTUALIZAR LISTA DE AMIGOS************//

function actualizarListaHtml() {
    ///Obtener elemento lista ul///
    let elementoUl = document.getElementById("listaParticipantes");
    ///Limpiar lista existente///
    elementoUl.innerHTML = "";
    ///Iterar con el array///
    let elementoLi;
    /*Si el "i" es menor al total de elementos del array, creamos un <li> y le asignamos el elemento de la poción "0"//
    en el siguiente ingreso asignará la posición "i+1"*/
    for (let i = 0; i < listaAmigos.length; i++){
        ///Creando elementos lista HTML//
    elementoLi = document.createElement("li");
    elementoLi.textContent = listaAmigos[i];
    //Agregamos el elemento  <li> a la lista con el origen del input///
    document.getElementById("listaParticipantes").appendChild(elementoLi);
    }
    return;
}

//TAREA 4*********** CREAR FUNCIÓN SORTEAR AMIGO **************//
function sortearAmigo(){
    ///Elegimos todos los elementos <li>///
    let listaUl = document.getElementById("listaParticipantes");
    ///Validar que hay nombres disponibles///
    if(listaAmigos.length >= 2){
       ///Genera indice aleatorio//
       let amigoSecreto = Math.floor(Math.random() *listaAmigos.length); 
       ///Obtiene el nombre del amigo secreto///
       let nombreAmigoSecreto = listaAmigos[amigoSecreto];
       ///Mostrar resultado///
       let resultadoUl = document.getElementById("resultado");
       resultadoUl.innerHTML = "";///Limpia el resultado///
       let resultadoLi = document.createElement("li");
       resultadoLi.textContent = "Tu amigo secreto es : " + nombreAmigoSecreto;
       resultadoUl.appendChild(resultadoLi);
       ///Vaciar UL///
       listaUl.innerHTML="";
       ///Agregar Mensaje Final//
       let mensajeFinal = document.querySelector("h2");
       mensajeFinal.textContent = "¡ **** FELICIDADES ****!";
       ///Activa botón nuevo juego//
       botonOn("reiniciarJuego");
       ///Desactivar botón añadir ///
       botonOff("addAmigo");
       ///Desactivar botón sortear amigo///
       botonOff("sortearAmigo");
    } else{
        alert("Debes ingresar al menos 2 participantes.");
    }
        return;
    }

//TAREA 5 ******************* CREANDO FUNCIÓN REINICIO DE JUEGO*******************//

function reiniciarJuego() {
    ///.Restablece el título original de la sección.///
    let resetH2 = document.querySelector("h2");
    resetH2.innerText = "Digite el nombre de los participantes:";
    ///Restablece el estado original de la etiqueta div//Limpia el resultado del sorteo./// 
    let resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = "";
    ///Eliminar la lista HTML///
    listaAmigos = [];//Limpia la lista de amigos//
    botonOn("addAmigo");
    botonOn("sortearAmigo");
    ///Desactivar botón nuevo juego///
    botonOff("reiniciarJuego");
    return;
}    

//OTROS.*************************FUNCIONES REUTILIZABLES***********************//


//****Función : Limpiar casilla imput.****//
function limpiarElementHtml(elemento) {
    document.getElementById(elemento).value=""; 
}

///****Función:Activar botón.****///
function botonOn(elemento) {
    document.getElementById(elemento).removeAttribute("disabled");//Remueve el atribito//
    botonOn.onclick= null; // Elimina el elemento onclic//

 }

 ///****Función: Desactivar botón.****///
function botonOff(elemento) {
    let botonOff = document.getElementById(elemento).setAttribute("disabled", "disabled");
}

///****Función: Título de encabezado.****///
function tituloHead(elemento,texto) {
    let tituloHead = document.querySelector(elemento)
    tituloHead.innerText = texto;
}