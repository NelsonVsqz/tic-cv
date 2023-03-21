// Obtener boton modo
let modo = document.getElementById("modo2");
let main = document.getElementById("principal");
let videocontainer = document.getElementById("video-container");
let leftcolumn = document.getElementById("left-column");
let videocontainer2 = document.getElementById("video-container2");
let rightcolumn = document.getElementById("right-column");
let aside = document.getElementById("aside");
modo.addEventListener("click", function () {
  let mainClass = document.getElementsByClassName("main");
  
  console.log(mainClass)
  console.log(mainClass.length)
  console.log(!mainClass)

  if (mainClass.length ===1) {
    main.classList.remove('main');
    videocontainer.classList.remove('video-container');
    leftcolumn.classList.remove('left-column');
    videocontainer2.classList.remove('video-container2');
    rightcolumn.classList.remove('right-column');  
    aside.classList.remove('fixed-buttons');

    main.classList.add('main2');
    videocontainer.classList.add('video-containera');
    leftcolumn.classList.add('left-column2');
    videocontainer2.classList.add('video-container2b');
    rightcolumn.classList.add('right-column2');
    aside.classList.add('fixed-buttons2');  
  } else {
    let mainClass2 = document.getElementsByClassName("main2");
  
    if (mainClass2.length === 1) {
    main.classList.remove('main2');
    videocontainer.classList.remove('video-containera');
    leftcolumn.classList.remove('left-column2');
    videocontainer2.classList.remove('video-container2b');
    rightcolumn.classList.remove('right-column2');  
    aside.classList.remove('fixed-buttons2');

    main.classList.add('main');
    videocontainer.classList.add('video-container');
    leftcolumn.classList.add('left-column');
    videocontainer2.classList.add('video-container2');
    rightcolumn.classList.add('right-column');
    aside.classList.add('fixed-buttons');  
  }
  }
});

//Nav
let sectiones = document.querySelectorAll("section");
let nav = document.getElementById("nav");
// Crear un enlace para cada sección
sectiones.forEach(function (section) {

  let link = document.createElement("a");
  link.href = "#" + section.id;
  link.innerHTML = section.id;

  link.addEventListener("click", function () {
    // Ocultar todas las secciones al hacer clic en un enlace
    sectiones.forEach(function (section) {
      section.style.display = "none";
    });
    // Mostrar solo la sección correspondiente al enlace clickeado
    document.getElementById(link.innerHTML).style.display = "block";
  });

  nav.appendChild(link);
});


const foto = document.querySelector('#foto')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const edad = document.querySelector('#edad')
const pais = document.querySelector('#pais')
const estado = document.querySelector('#estado')
const ciudad = document.querySelector('#ciudad')
const correo = document.querySelector('#correo')
const celu = document.querySelector('#celu')

const generarUsuario = async () => {
  const url = 'https://randomuser.me/api/?nat=ar';
  const respuesta = await fetch(url);
  const { results } = await respuesta.json();
  const data = results[0]
console.log(data)
  foto.src = data.picture.large
  nombre.textContent = data.name.first
  apellido.textContent = data.name.last
  edad.textContent = data.dob.age
  pais.textContent = data.location.country
  estado.textContent = data.location.state
  ciudad.textContent = data.location.city
  correo.textContent = data.email
  celu.textContent = data.phone


}
window.addEventListener('load', generarUsuario)
document.addEventListener('DOMContentLoaded', generarUsuario)
//Validar formulario de contacto

const form = document.querySelector("form");
const nombreForm = document.getElementById("nombreForm");
const emailForm = document.getElementById("emailForm");
const mensajeForm = document.getElementById("mensajeForm");

form.addEventListener("submit", function(event) {
  if (!nombreForm.value) {
    nombreForm.classList.add("is-invalid");
    event.preventDefault();
  } else {
    nombreForm.classList.remove("is-invalid");
  }

  if (!emailForm.value) {
    emailForm.classList.add("is-invalid");
    event.preventDefault();
  } else {
    emailForm.classList.remove("is-invalid");
  }

  if (!mensajeForm.value) {
    mensajeForm.classList.add("is-invalid");
    event.preventDefault();
  } else {
    mensajeForm.classList.remove("is-invalid");
  }
});


const groupBtn = document.querySelector('.group-btn');
const ungroupBtn = document.querySelector('.ungroup-btn');
const group1 = document.querySelectorAll('.group-1');
const group2 = document.querySelectorAll('.group-2');
const group3 = document.querySelectorAll('.group-3');
const group4 = document.querySelectorAll('.group-4');
const group5 = document.querySelectorAll('.group-5');

groupBtn.addEventListener('click', () => {
  group1.forEach(section => {
    section.style.display = 'grid';
  });
  group2.forEach(section => {
    section.style.display = 'grid';
  });
  group3.forEach(section => {
    section.style.display = 'grid';
  });
  group4.forEach(section => {
    section.style.display = 'grid';
  });
  group5.forEach(section => {
    section.style.display = 'grid';
  });
  var video2 = document.getElementById('videopresent2');
video2.style.display = 'none'
});
    
ungroupBtn.addEventListener('click', () => {
  group1.forEach(section => {
    section.style.display = 'none';
  });
  group2.forEach(section => {
    section.style.display = 'none';
  });
  group3.forEach(section => {
    section.style.display = 'none';
  });
  group4.forEach(section => {
    section.style.display = 'none';
  });
  group5.forEach(section => {
    section.style.display = 'none';
  });
  var video2 = document.getElementById('videopresent2');
  video2.style.display = 'block'      
});


const gif = document.querySelector('#img-container img');

gif.addEventListener('click', () => {
  gif.style.animationPlayState = 'paused';
});

const gif2 = document.querySelector('#img-container2 img');

gif2.addEventListener('click', () => {
  gif2.style.animationPlayState = 'paused';
});

const gif3 = document.querySelector('#img-container3 img');

gif3.addEventListener('click', () => {
  gif3.style.animationPlayState = 'paused';
});

const gif4 = document.querySelector('#img-container4 img');

gif4.addEventListener('click', () => {
  gif4.style.animationPlayState = 'paused';
});

const gif5 = document.querySelector('#img-container5 img');

gif5.addEventListener('click', () => {
  gif5.style.animationPlayState = 'paused';
});

window.addEventListener('load', function(){
  var newVideo = document.getElementById('videopresent');
  newVideo.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);

  newVideo.play();

});
window.addEventListener('load', function(){
  var newVideo2 = document.getElementById('videopresent2');
  newVideo2.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);

  newVideo2.play();

});