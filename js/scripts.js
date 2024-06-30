//Seleccionar contenido HTML

// querySelector 
const heading = document.querySelector('.header__texto h2'); // Retorna ya sea 0 o hasta 1 elemento que concuerde con el selector que estamos escribiendo
heading.textContent = 'Nuevo Heading'; //Cambia el contenido del texto
heading.classList.add('nueva-clase'); //Agrega una nueva clase
console.log(heading)

// querySelectorAll Retorna 0 hasta todos los elementos que concuerden con el selector tipo css que le pasemos a la funcion 
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]); // Para seleccionar un elace en especifico se hace por medio de su indice

enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].classList.add('clase-nueva');
// enlaces[0].classList.remove('navegacion__enlace'); //Sirve para eliminar clases
// enlaces[0].href = 'https://google.com'; //Se puede cambiar el enlace a la que te redirige 

// getElementById
const heading2 = document.getElementById('heading'); // Retorna 0 hasta 1 elemento que concuerde con su ID
console.log(heading2)


// Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A'); //createElement nos permite crear codigo HTML

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto 
nuevoEnlace.textContent = 'Nuevo enlace';
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace)



//Eventos 

console.log(1);

window.addEventListener('load', function() { //load espera a que el JS y los archivos que dependen del HTML esten listos
    console.log(2);
})

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera css o imagenes
    console.log(4);
})

console.log(5);

// window.onscroll = function() { //Esta funcion esta ejecutandose multiples veces cuando se hace scroll a la ventana
//     console.log('scrolling...');
// }


// // Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) { //El evento click se utiliza en imagenes, eventos, textos
//     console.log(evento);
//     evento.preventDefault(); //Previene la accion por Default

//     // Validar un formulario 

//     console.log('Enviando Formulario...');
// });


//Eventos de los Inputs y TextArea

const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El Evento de Submit se utiliza solo para los formularios
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el Formulario
    const {nombre, email, mensaje} = datos;

    //Verifica si el parafo de error y envio no existen, si no exixten ejecutan el codigo
    if(document.querySelector(".error")===null && document.querySelector(".envio")===null){
        if(nombre === ''|| email === '' || mensaje === ''){
            mostrarAlerta('Todos los campos son obligatorios', true);
            return; // return en un if corta la ejecucion del codigo, por lo que no se enviara el formulario
        }
        console.log(email);
        console.log(nombre);
        console.log(mensaje);
        
        // Enviar Formulario
        console.log('Enviando Formulario');
        //Alerta de Enviar correctamente
        mostrarAlerta('Mensaje enviado correctamente');
    }
});


function leerTexto (evento) {
    // console.log(evento.target.value);

    datos[evento.target.id] = evento.target.value;

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje
    if(error) {
        alerta.classList.add('error')
    }else {
        alerta.classList.add('envio')
    }
    formulario.appendChild(alerta)
    // Desaparezca despues de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

