

/* IMPORTANTE!!!:
UTILIZE EL MISMO NOMBRE EN TODAS LAS VARIABLES, LOS EJEMPLOS ESTAN ARMADOS PARA COPIAR Y PEGAR.
No se olviden de crear el elemento en el html. sino no les va a funcionar NADA. 
ya que JS va a buscar algo que no eixste
*/




                        //EJEMPLO SIMPLE DE UN EVENTO


/* LA SINTAXIS SERIA  elemento.evento = funcion */

let boton = document.getElementById("boton")

boton.onclick = function(){
    alert("hola")
}






            //ADDEVENTLISTENER       (es la que vamos a usar nosotros)




let boton = document.getElementById("boton")


function saludar(){
    alert("gracias por la consulta nico")
}

boton.addEventListener("click", saludar)     //tambien puedo declarar la funcion directamente en el segundo parametro







                                        //EVENTOS CON EL MOUSE




        //CLICK: Este evento se activa cuando el usuario hace clic en un elemento con el mouse.




/* let elemento = document.getElementById("miElemento");


elemento.addEventListener("click", function() {      // Agregar un evento de clic al elemento utilizando addEventListener
  console.log("Haz hecho clic en el elemento!");
}); */





        //MOUSEOVER: Este evento se activa cuando el mouse entra en un elemento.


/* let elemento = document.getElementById("miElemento");



elemento.addEventListener("mouseover", function() {     
  console.log("El mouse ha entrado en el elemento!");
}) */






            //MOUSEOUT: Este evento se activa cuando el mouse sale de un elemento.


/* let elemento = document.getElementById("miElemento");


elemento.addEventListener("mouseout", function() {
  console.log("El mouse ha salido del elemento!");
});
 */



        //MOUSEMOVE: Este evento se activa cuando el mouse se mueve dentro de un elemento.



/* let elemento = document.getElementById("miElemento");


elemento.addEventListener("mousemove", function(event) {
  console.log("El mouse estaen la posición x: " + event.clientX + " y en la posición y: " + event.clientY);
});

 */

/*En este último ejemplo, usamos el objeto event para obtener las coordenadas del mouse en la pantalla 
y las muestra en la consola. (recorda que el event es un objeto propio de js)



Estos son solo algunos de los eventos que puede tener un mouse en JavaScript. 
También existen otros eventos como mousedown, mouseup, contextmenu, entre otros que vimos en la clase.
solo se debe reemplazar el evento donde corresponda */







        
                                //Ejemplo para que entiendan el e.target

        //es parecido a lo que vimos con this.   hace referencia al elemento que traemos por ID

document.getElementById("boton1").addEventListener("click", function (event) {
  // e.target se refiere al elemento <button id="boton1">Botón 1</button> que deberia estar en el html
  alert("Se hizo clic en " + event.target.textContent);  // textContent.content, seria "boton1" 
});

document.getElementById("boton2").addEventListener("click", function (event) {
  // y en este caso e.target se refiere al elemento <button id="boton2">Botón 2</button>
  alert("Se hizo clic en " + event.target.textContent);
});

 














                                            //EVENTOS DE TECLADO




                            //INPUT

/* input: Este evento se activa cuando se cambia el valor de un elemento de entrada
El evento input se dispara inmediatamente después de que el valor cambia. */



/* let inputField = document.getElementById('miCampoDeTexto');
inputField.addEventListener('input', function(event) {
  console.log('Valor del campo de texto cambiado:', event.target.value);
});
 */



                            //CHANGE


/* change: Este evento también se activa cuando se cambia el valor de un elemento de entrada, 
pero a diferencia del evento input, el evento change se dispara después de que el usuario termino
de interactuar con el texto, por ejemplo, haciendo clic fuera del campo de texto. */



let inputField = document.getElementById('miCampoDeTexto');
inputField.addEventListener('change', function(event) {
  console.log('Valor del campo de texto cambiado:', event.target.value);
});




                            //SUBMIT


/* submit: se activa cuando se envía un formulario, 
Se usa para realizar alguna acción antes de enviar el formulario. */


let form = document.getElementById('miFormulario');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Detener el envío del formulario
  let enviar = confirm("seguro desea enviar el formulario?")
  if(enviar){console.log('Formulario enviado');}
  
});


/* En este ejemplo, se usa el método preventDefault() para detener el envío del formulario 
y evitar que la página se recargue. 
Pueden agregar su propia lógica para manejar la información del formulario antes de enviarla al servidor (o a donde quieran). */


