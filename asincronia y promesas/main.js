/*
la diferencia entre sincronía y asincronía se resume en cómo se manejan las tareas y los eventos:

En la programación sincrónica, las tareas se ejecutan una detrás de la otra en un orden predecible. 
Cada tarea tiene que esperar a que la anterior se complete para poder continuar.

En la programación asincrónica, las tareas pueden ejecutarse en cualquier orden 
y no necesitan esperar a que las tareas anteriores se completen. 
se usan mecanismos como devoluciones de llamada (callbacks), 
promesas y async/await para gestionar tareas que pueden llevar tiempo, 
como operaciones de red o lectura/escritura de archivos.



Los callbacks: son funciones que se pasan como argumentos a otras funciones 
y se llaman cuando se completa una tarea asíncrona. 

Las promesas: son objetos que representan el estado de una tarea asíncrona 
y permiten encadenar múltiples tareas de forma asíncrona.  
*/






                            //SET TIMEOUT   (en castellano, establecer tiempo de espera)

/*setTimeout es una función de temporizador 
que se usa para ejecutar la función después de un cierto tiempo de espera. 
La sintaxis es la siguiente: */


//setTimeout(funcion, tiempo);


/* function saludar() {
  console.log('Hola mundo!');
}

setTimeout(saludar, 2000); */


/* la función saludar se ejecuta después de 2 segundos 
(2000 milisegundos) cuando se llame a setTimeout. 
*/



//EJEMPLO DE SETTIMEOUT aplicado a los console.log

/* console.log("Inicia proceso")

setTimeout(()=> {
    console.log("Mitad de proceso")
}, 3000)

console.log("Fin proceso")
 */





//ejemplo del boton 

/* const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('popup-active')
    

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
})
 */
 



//EJEMPLO del for con un setTimeout



/* for (let letra of "hola") {
    setTimeout(() => {
        console.log(letra)
    }, 1000)
}

for (let letra of "mundo") {
    setTimeout(() => {
        console.log(letra)
    }, 3000)
}
 */




                

                //CALL STACK

/* El call stack o pila de llamadas es una estructura de datos en 
la que se almacenan las llamadas a funciones que se están ejecutando 
actualmente en un programa. 
Es como una pila de platos: el último plato que se coloca es el primero en salir. 
tambien conocido como sistema LIFO (Last In, First Out) / Último en Entrar, Primero en Salir*/




                //EVENT LOOP

   /*  El event loop o bucle de eventos es un mecanismo en JavaScript 
   que se encarga de manejar la asincronía y el orden de ejecución de las tareas 
   en un programa.

    Si una tarea es asíncrona, se envía a una API de tiempo de espera 
    (como setTimeout), donde se espera hasta que se cumple el tiempo especificado. 
    Una vez que se cumple el tiempo especificado, la tarea se agrega 
    a la cola de tareas.
    Por eso es que aunque pongamos settimeOut 0, se sigue tomando como asincronico */



    //Set interval

/* se usa para programar una función para que se ejecute repetidamente con un intervalo de tiempo fijo 
entre cada ejecución. 
La sintaxis básica de setInterval es: */

//setInterval(funcion, tiempo);


/*                           EJEMPLO del reloj


let num = prompt("imgresa los segundos")
let segundos = num *1000

                            let time= setInterval(() => {
                                const date = new Date();
                                console.log(date.toLocaleTimeString());
                            }, 1000);

setTimeout(()=>{
    clearInterval(time)
},segundos) */



 /*  Es importante tener en cuenta que setInterval continúa ejecutando 
 la función a intervalos regulares hasta que se detiene manualmente. 
 Para detener la ejecución de setInterval, se puede usar el método
  clearInterval y pasarle el valor de retorno de setInterval */









                                    //PROMESAS


/* Las promesas son un mecanismo en JavaScript que se usan para 
trabajar con operaciones asíncronas. 
Una promesa representa una operación asíncrona que se va a cumplir en algun momento
y lo importante de las promesas es que pueden estar en uno de tres estados posibles: 

pendiente (pending) que es el estado de una promesa cuando nace,

resuelta (fulfilled) cuando se resuelve de manera satisfactoria,

o rechazada (rejected) que es cuando ocurre un error que nosotros no controlamos,
por ejemplo cuando tira un 404.



Una promesa se crea utilizando el constructor Promise, 
que toma una función como argumento/parametro. Esta función, a su vez, 
toma dos argumentos: 
resolve y reject. 

resolve se utiliza para indicar que la promesa se cumplio satisfactoriamente, 
mientras que reject se usa para indicar que la promesa se rechaza con un error.




Una vez que se crea una promesa, se puede encadenar una o más funciones 
de devolución de llamada (then) para manejar la resolución de la promesa y 
cualquier error que pueda ocurrir (catch). 
Las funciones then y catch toman un argumento que es la respuesta 
o el error de la promesa anterior.


 */


/* const promesa = new Promise((resolve, reject) => {
  // Hacer algo asíncrono, como una solicitud HTTP
  // Si la operación se realiza correctamente, llama a resolve con el resultado
  // Si la operación falla, llama a reject con un error
});

promesa.then(resultado => {
  // Manejar el resultado si la promesa se cumple
}).catch(error => {
  // Manejar el error si la promesa se rechaza
});
 */

/* En este ejemplo, se crea una nueva promesa que representa una operación asíncrona. 
La promesa se resuelve o se rechaza según el resultado de la operación. 
Se encadenan las funciones then y catch para manejar el resultado 
y el error de la promesa, respectivamente.

Las promesas permiten trabajar con operaciones asíncronas de una manera más legible 
y fácil de entender que los callbacks anidados. 
También permiten encadenar varias operaciones asíncronas juntas y manejar errores 
en una sola función catch. */



/* const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        if (res === true) {
            resolve('Promesa resuelta')
        } else {
            reject('Promesa rechazada')
        }
    })
}

console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' } */

 




//EJEMPLO FACIL DEL TRY-CATCH


/* function holaMundo(){
    const mensaje = "hola mundo"
    try{
        procesarMensaje()
    }catch(error){
        console.log(error)
    }finally{
        console.error("saliendo del try catch")
    }
    return mensaje;
}

console.log(holamundo()) */




/* let div = document.getElementById("contenedor") */
const div = document.getElementById("divResultado");
const obtenerBtn = document.getElementById("obtenerBtn");

const productos = [
    {nombre:"lenovo",precio:123},
    {nombre:"samsung",precio:456},
    {nombre:"apple",precio:789},
    {nombre:"motorola",precio:159},
]



const obtenerproducto = ()=>{
    console.log("obteniendo productos...")
    return new Promise((resolve,reject)=>{
        if(productos.length === 0){  //
            reject("error al obtener los productos")
        }else{
            setTimeout(()=>{
                resolve(productos)
                                    obtenerBtn.innerHTML= `<img src = "">`
            },3000)
        }
    })
}


obtenerBtn.addEventListener("click", () => {
    obtenerproducto()
    .then(() => {
        div.innerHTML = "<h1>todo salio ok</h1>";
        obtenerBtn.innerText= "Obtener productos" //vuelvo a dejar el texto del boton
    })
    .catch((error) => {
        console.error(error);
    });
});




/* const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('popup-active')
    

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
}) */