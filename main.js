const h1 = document.querySelector('h1');
/*const p = document.getElementsByClassName('parrafo');
const paragraph = document.getElementById('paragraph');
const input = document.querySelector('input');*/
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


// el addEventListener es un método, por eso lleva paréntesis con sus argumentos, el click es el evento
// y el btnOnClick es la función que llamo cada vez que sucede el evento "click" 
//btn.addEventListener('click', btnOnClick);

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
  //  console.log({event});
    event.preventDefault();
//    console.log('Escuchando el evento Click')
//    console.log(input1.value + input2.value);
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}


/*console.log(h1);

console.log(input.value);

console.log({
    h1,
    p,
    paragraph,
    input
}
);

h1.innerHTML = 'Boricua';
//h1.innerText = 'Portorriqueño';

h1.classList.add('rojo');
//h1.classList.remove('verde');
//h1.classList.toggle('verde');
h1.classList.contains('verde');

input.value = "456";

//console.log(document.createElement('img'));

const img = document.createElement('img'); //1- creamos la imagen
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');  //2- le damos los atributos

console.log(img);

//Puedo usar cualquiera de estos:
//paragraph.appendChild
paragraph.append(img); //3-insertamos la imagen en el contenedor que ya existía en el HTML


//console.log(h1.getAttribute('class'));

//h1.setAttribute('class', 'rojo');*/