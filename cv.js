// Obtener los botones para mostrar y ocultar secciones
let info = document.getElementById("infopersonalboton");
let educacion = document.getElementById("educacionboton");
let experiencia = document.getElementById("experienciaboton");
let habilidades = document.getElementById("habilidadesboton");

// Obtener las secciones a ocultar y mostrar
let infopersonalSeccion =document.getElementById("infopersonalseccion");
let educacionSeccion = document.getElementById("educacionSeccion");
let experienciaSeccion = document.getElementById("experienciaSeccion");
let habilidadesSeccion = document.getElementById("habilidadesSeccion");

// Añadir eventos de click a los botones
info.addEventListener("click", function() {
  verSeccion(infopersonalSeccion);
});
educacion.addEventListener("click", function() {
  verSeccion(educacionSeccion);
});

experiencia.addEventListener("click", function() {
  verSeccion(experienciaSeccion);
});

habilidades.addEventListener("click", function() {
  verSeccion(habilidadesSeccion);
});

// Función para mostrar u ocultar una sección
function verSeccion(section) {
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}
//Nav
let sections = document.querySelectorAll("section");
let nav = document.getElementById("nav");

// Crear un enlace para cada sección
sections.forEach(function(section) {

  let link = document.createElement("a");
  link.href = "#" + section.id;
  link.innerHTML = section.id;
  
  link.addEventListener("click", function() {
    // Ocultar todas las secciones al hacer clic en un enlace
    sections.forEach(function(section) {
      section.style.display = "none";
    });
    
    // Mostrar solo la sección correspondiente al enlace clickeado
    document.getElementById(link.innerHTML).style.display = "block";
  });
  
  nav.appendChild(link);
});


//Agregar un campo nuevo:
// Obtener el botón para agregar un campo nuevo
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function() {
  let newField = document.createElement("input");
  newField.type = "text";
  newField.placeholder = "Nuevo campo";
  newField.classList.add("new-field");
  
  let container = document.getElementById("container");
  container.appendChild(newField);
});
//Modificar un campo existente:
// Obtener el botón para modificar un campo existente
let editBtn = document.getElementById("editBtn");

editBtn.addEventListener("click", function() {
  let existingField = document.getElementById("existingField");
  existingField.value = "Nuevo valor";
});
//Eliminar un campo existente:
// Obtener el botón para eliminar un campo existente
let deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", function() {
  let existingField = document.getElementById("existingField");
  existingField.remove();
});

//Validar formulario de contacto

let form = document.getElementById("contactForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (validateForm()) {
    alert("Formulario enviado correctamente");
    form.reset();
  }
});

function validateForm() {
  let isValid = true;

  if (name.value === "") {
    name.classList.add("error");
    isValid = false;
  } else {
    name.classList.remove("error");
  }

  if (email.value === "") {
    email.classList.add("error");
    isValid = false;
  } else {
    email.classList.remove("error");
  }

  if (message.value === "") {
    message.classList.add("error");
    isValid = false;
  } else {
    message.classList.remove("error");
  }

  return isValid;
}