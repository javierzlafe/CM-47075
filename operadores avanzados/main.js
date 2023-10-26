


/* const edad = 19 */

/* if(edad >= 18){
    console.log("es mayor, puede ingresar")
}else{
    console.log("no podes ingresar sos menor")
}
 */

/*  let mensaje =  edad >=18 ? alert("si, es mayor"): "sos menor" */


/* 
if(true){
    console.log("esto no se va a imprimir")
} */




                            //DESESTRUCTURACION



/* const persona = {
    nombre:"juan",
    edad: 30,
    direccion:{
        calle: "calle falsa",
        numero: 123,
        ciudad:"buenos aires"
    }
}





const {nombre,edad,direccion:{calle,numero,ciudad}} = persona

console.log(nombre +" es de "+ ciudad ) */





//-------------------------------------------------------------------------------------------------


//ejemplo caso real




const data = {
    "timestap": 1653500159600,
    "base": "USD",
    "rates":{
        "ARG_PRICE_USD_ID": 1050,
        "URU": 38.5,
        "CHI": 1000,
        "COL": 4050,
        "MEX":18
    }
}


const {rates : {ARG_PRICE_USD_ID:ARG}} = data

alert(ARG)