
                                    //STORAGE 


/* el "storage" se refiere a los mecanismos que permiten que una aplicación web almacene 
datos en el navegador del usuario. para que? para podes usarlas despues. 
Los dos tipos principales de almacenamiento en el navegador son:

Local Storage: es un espacio de almacenamiento fijo/persistente en el navegador, que lo podemos usar 
para almacenar datos de forma indefinida. 
Los datos que se guardan en Local Storage no caducan y se mantienen incluso después de cerrar el navegador. 


Session Storage: es similar al Local Storage, pero los datos que guardamos caducan cuando 
se cierra la sesión del navegador. La sesión se puede cerrar de forma explícita cerrando el navegador 
o de forma implícita al expirar el tiempo de inactividad del usuario.
por ejemplo las seciones de los bancos. que cada 5 minutos se cortan.*/






                    //HAY 4 METODOS PARA EL USO DEL STORAGE

/* 
setItem() permite crear una clave y asignarle un valor
getItem() permite recuperar o traer una clave desde el local storage
removeItem() para eliminar un dato especifico
clear() limpiar todo
 */




/* 
                            USO DE SET-ITEM

localStorage.setItem('bienvenida', '¡Hola alumnos!'); 

le envia la clave "bienvenida" asociada al contenido "hola alumnos"*/





/* 
                EJEMPLO PARA ENVIAR DATOS DE UN FORMULARIO AL STORAGE

creamos las variables y las asociamos a cada id del formulario



const nombre = document.querySelector("#inputNombre")
const apellido = document.querySelector("#inputApellido")  //SI NO CREAS EL FORM EN HTML NO FUNCIONA
const edad = document.querySelector("#inputEdad")
const boton = document.getElementById("boton")




                                    SET-ITEM

//ahora vamos a crear una funcion que me guarde el formulario en el local storage

 function guardarFormulario(){
    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("apellido", apellido.value)
    localStorage.setItem("edad", edad.value)
}

boton.addEventListener("click", guardarFormulario) 
*/



/*                                  GET-ITEM

 ya enviamos los datos al local storage, como hago para traerlos? 
 como dijimos en la clase... getItem() permite recuperar o traer una clave desde el local storage 


function recuperarDatos(){
    nombre.value = localStorage.getItem("nombre")
    apellido.value = localStorage.getItem("apellido")
    edad.value = localStorage.getItem("edad")
}
*/


/*                                REMOVE-ITEM
    ya sabemos enviarlo y traerlo, como hacemos para eliminar un dato que ya no nececitamos? 
    aca entra el metodo removeItem()
   
   
    function quitarDatosDelLocalStorage(){
    localStorage.removeItem("nombre")   //elimina el item completo
} */



/*                                 CLEAR() 

    y si quiero eliminar todo? bueno, para eliminar todo voy a usar el metodo clear(), 
    pero este metodo en particular no me va a pedir parametros, porque justamente elimina TODO lo que esta
    dentro del local storage... cuando lo podemos usar? por ejemplo cuando usamos una computadora 
    que no es nuestra. antes de irnos, metemos el clean, y listo.
*/




                        //AHORA FALTARIA HABLAR DEL SESION STORAGE.

 /*  El sesion storage funciona de la misma manera que el local, pero la diferencia es que solo va a poder
     recuperar los datos, pero en el momento en que la sesion este ACTIVA, una vez que se termina la sesion,
     ya no se puede acceder a ningun dato. se pierde todo digamos. por ejemplo las sesiones de los bancos */ 






     //Ciclo para recorrer las claves almacenadas en el objeto localStorage


/* for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);       //key es un metodo de storage que me permite recorrer las claves
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
    }
 */





    //------------------------------------------------------------------------------------------------------




//                                      JSON


/*(JavaScript Object Notation) es un formato de intercambio de datos 
Es basicamente un formato de texto que se usa para enviar datos entre aplicaciones web y servidores. 
(la vieja chusma del barrio)

En JavaScript, los objetos JSON se definen usando una sintaxis de pares clave-valor 
similar a la sintaxis de los objetos JavaScript. 
empezo con javascript, y se traslado a todos los lenguajes de programacion
*/


/*              EJEMPLO DE UN FORMATO JSON (ojo que no es un objeto, solo se parece)

{
    "nombre": "Javier Gimenez",
    "edad": 32,
    "ciudad": "Ciudad de Buenos Aires",
    "correoElectronico": "juan.perez@example.com",
    "casado": false,
    "hobbies": ["programar", "motociclismo", "viajar"]
  } */



  /* en JSON tenemos dos metodos.  PARSE() y STRINGIFY() 

    para poder transofrmar todo a un texto que se pueda interpretar en el local storage,
    hay que usar stringify al final de la funcion
  */




     /* 
                                    STRINGIFY()
     
     function guardarFormulario(){

        const datosDeFormulario= {
            nombre: Nombre.value,
            edad: Edad.value,
            apellido: Apellido.value,
        }

        let resultado = JSON.stringify(datosDeFormulario)
        console.log(resultado)  */ 


       // localStorage.setItem("datosDelFormulario", datosDeFormulario)   //esto nos va a fallar. tira objet objet
       
        


        /*                           PARSE()
        
        para traer un objeto json, lo tenemos que volver a poner en un formato de tipo objeto
        para poder leerlo usamos el PARSE() */



   /*      function recuperarDatosDelFormulario(){
            const datosDelForm = JSON.parse(localStorage.getItem("datosDeFormulario"))
            Nombre.value = datosDelForm.nombre
            Apellido.value = datosDelForm.apellido
            Edad.value = datosDelForm.edad
            
        }
        recuperarDatosDelFormulario() */





 