
// ESTE ES PARA LAS ANIMACIONES DE INICIO
function reiniciarAnimaciones() {
  const logo = document.getElementById('logo');
  const titulo = document.getElementById('titulo');
  const texto = document.getElementById('texto');

  // Clonar los elementos para reiniciar las animaciones
  const logoClon = logo.cloneNode(true);
  const tituloClon = titulo.cloneNode(true);
  const textoClon = texto.cloneNode(true);

  // Reemplazar los elementos originales con los clonados
  logo.parentNode.replaceChild(logoClon, logo);
  titulo.parentNode.replaceChild(tituloClon, titulo);
  texto.parentNode.replaceChild(textoClon, texto);
}



// ESTE ES PARA LA animación de la edad en sobre mí
var miEnlace = document.getElementById("miEnlace");
var cont1 = document.getElementById("cont1");
var tiempo1; // Declarar la variable fuera de la función para que sea accesible en todo el alcance.

function ejecutarCodigo() {
    // Detener cualquier intervalo existente antes de iniciar uno nuevo
    if (tiempo1) {
        clearInterval(tiempo1);
    }

    let cant1 = 0;
    let tiem = 200;

    function contador() {
        cont1.textContent = cant1 += 1;
        if (cant1 === 21) {
            clearInterval(tiempo1);
        }
    }

    // Iniciar el nuevo intervalo
    tiempo1 = setInterval(contador, tiem);

    // Reiniciar la animación CSS aplicando y eliminando la clase 'contador'
    cont1.classList.remove("contador");
    void cont1.offsetWidth; // Truco para reiniciar la animación
    cont1.classList.add("contador");
}

miEnlace.addEventListener("click", ejecutarCodigo);




//Esto es para reiniciar las barras
var miEnlace = document.getElementById("miEnlace");

miEnlace.addEventListener("click", ejecutarAnimacion);

function ejecutarAnimacion() {
  var barras = document.querySelectorAll("[class*='barra--']");

  barras.forEach(function (barra) {
      var nuevaBarra = barra.cloneNode(true);
      barra.parentNode.replaceChild(nuevaBarra, barra);
      
      nuevaBarra.style.setProperty("--barra-largo", "");
      
      // Esto fuerza una reflow, permitiendo que la animación se reinicie
      void nuevaBarra.offsetWidth;
  });
}






// ESTE ES PARA RESPONSIVE
const btnMenu = document.querySelector("header");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
  menu.classList.toggle("mostrar");
})

// ESTE ES PARA ESTILO DE BOTÓN SELECCIONADO
function  seleccionar(link){
  let links = document.querySelectorAll("header nav a")
  links[0].className = "";
  links[1].className = "";
  links[2].className = "";
  links[3].className = "";
  links[4].className = "";

  //agregamos el estilo al link seleccionado
  link.className = "selected"
}

function  seleccionar2(link){
  let links = document.querySelectorAll("section a")
  links[0].className = "tres";
  links[1].className = "dos";
  links[2].className = "fotog";
  links[3].className = "dibujos";
  links[4].className = "piezas";
  links[5].className = "web";

  //agregamos el estilo al link seleccionado
  link.className = "este"
}
// ESTE ES PARA MOSTRAR CADA SECCIÓN en "sobre mi"

function sobremi1(){
  document.getElementById('res1').style.display = 'block';
  document.getElementById('res2').style.display = 'none';

}
function sobremi2(){
  document.getElementById('res1').style.display = 'none';
  document.getElementById('res2').style.display = 'block';

}
// ESTE ES PARA MOSTRAR CADA SECCIÓN en "trabajos"
//3D
function mostrar1(){
  document.getElementById('trabajos').style.backgroundColor = '#50287f';
  document.getElementById('primero').style.display = 'flex';
  document.getElementById('segundo').style.display = 'none';
  document.getElementById('tercero').style.display = 'none';
  document.getElementById('cuarto').style.display = 'none';
  document.getElementById('quinto').style.display = 'none';
  document.getElementById('sexto').style.display = 'none';
}
 
function mostrar2(){
  document.getElementById('trabajos').style.backgroundColor = '#5f368c';
  document.getElementById('primero').style.display = 'none';
  document.getElementById('segundo').style.display = 'flex';
  document.getElementById('tercero').style.display = 'none';
  document.getElementById('cuarto').style.display = 'none';
  document.getElementById('quinto').style.display = 'none';
  document.getElementById('sexto').style.display = 'none';
}
 
function mostrar3(){
  document.getElementById('trabajos').style.backgroundColor = '#6b4394';
  document.getElementById('primero').style.display = 'none';
  document.getElementById('segundo').style.display = 'none';
  document.getElementById('tercero').style.display = 'flex';
  document.getElementById('cuarto').style.display = 'none';
  document.getElementById('quinto').style.display = 'none';
  document.getElementById('sexto').style.display = 'none';
}
 
function mostrar4(){
  document.getElementById('trabajos').style.backgroundColor = '#5e56a1';
  document.getElementById('primero').style.display = 'none';
  document.getElementById('segundo').style.display = 'none';
  document.getElementById('tercero').style.display = 'none';
  document.getElementById('cuarto').style.display = 'flex';
  document.getElementById('quinto').style.display = 'none';
  document.getElementById('sexto').style.display = 'none';
}
 
function mostrar5(){
  document.getElementById('trabajos').style.backgroundColor = '#4a4999';
  document.getElementById('primero').style.display = 'none';
  document.getElementById('segundo').style.display = 'none';
  document.getElementById('tercero').style.display = 'none';
  document.getElementById('cuarto').style.display = 'none';
  document.getElementById('quinto').style.display = 'flex';
  document.getElementById('sexto').style.display = 'none';
}
 
function mostrar6(){
  document.getElementById('trabajos').style.backgroundColor = '#3f3c90';
  document.getElementById('primero').style.display = 'none';
  document.getElementById('segundo').style.display = 'none';
  document.getElementById('tercero').style.display = 'none';
  document.getElementById('cuarto').style.display = 'none';
  document.getElementById('quinto').style.display = 'none';
  document.getElementById('sexto').style.display = 'flex';
}

// Galerí­a
const images = document.querySelectorAll('.imge');
const containerImage = document.querySelector ('.container-img')
const imageContainer = document.querySelector('.img-show')
const copy = document.querySelector('.copy')

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        
        addImage(image.getAttribute('alt'), image.getAttribute('src'))
    })
})

const addImage =(altImage, srcImage) => {
    containerImage.classList.toggle('move')
    imageContainer.src = srcImage
    copy.innerHTML = altImage
}

containerImage.addEventListener('click', ()=>{
     containerImage.classList.toggle('move')
})
