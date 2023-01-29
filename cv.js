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


//Función para agregar un nuevo campo a una sección específica
function addField(sectionId, fieldName, fieldValue,fieldValue2) {
  var section = document.getElementById(sectionId);
  switch(section.id){
  case "infopersonalseccion":  
  var newField = document.createElement("div");
  newField.innerHTML = "<p>" + fieldName + ":"+ fieldValue+"</p> ";
  section.appendChild(newField);
  break
  case "educacionSeccion":  
  var newField = document.createElement("div");
  newField.innerHTML = "<h4 id="+fieldName+" >" + fieldName +"</h4> ";
  section.appendChild(newField);
  var newp = document.createElement("p");
  var fieldN = document.getElementById(fieldName);
  newp.innerHTML = "<p>"+ fieldValue +"</p> ";
  section.appendChild(newp);  
  break
  case "experienciaSeccion":  
  var newField = document.createElement("div");
  newField.innerHTML = "<h4 id="+fieldName+" >" + fieldName +"</h4> ";
  section.appendChild(newField);
  var newp = document.createElement("p");
  var fieldN = document.getElementById(fieldName);
  newp.innerHTML = "<p>"+ fieldValue +"</p> ";
  section.appendChild(newp); 
  var newp2 = document.createElement("p");
  newp2.innerHTML = "<p>"+ fieldValue2 +"</p> ";
  section.appendChild(newp2); 

  break
  case "habilidadesSeccion":  
  var lista = document.getElementById("lista"); 
  var newField = document.createElement("li");
  var nuevo = document.createTextNode(fieldName);
  newField.appendChild(nuevo);
  lista.appendChild(newField);

  break

  default:
  break
  }

}

//Función para modificar el valor de un campo existente en una sección específica
function editField(sectionId, fieldName, newValue, fieldName2, newValue2, fieldName3, newValue3) {
  var section = document.getElementById(sectionId);
  switch(section.id){
  case "infopersonalseccion":    
  var fields = section.getElementsByTagName("p");
  for(var i = 0; i < fields.length; i++) {
    if(fields[i].innerHTML.indexOf(fieldName) !== -1) {
      fields[i].innerHTML = "<p>" + newValue + ":</p> ";
      break;
    }
  }
  break
  case "educacionSeccion":
    var fields = section.getElementsByTagName("h4");
    for(var i = 0; i < fields.length; i++) {
      if(fields[i].innerHTML.indexOf(fieldName) !== -1) {
        fields[i].innerHTML = "<h4>" + newValue + "</h4>";
        break;
      }
    }
  var fields = section.getElementsByTagName("p");
    for(var i = 0; i < fields.length; i++) {
      if(fields[i].innerHTML.indexOf(fieldName2) !== -1) {
        fields[i].innerHTML = "<p>" + newValue2 + "</p> ";
        break;
      }
    }

  break
  case "experienciaSeccion":
    var fields = section.getElementsByTagName("h4");
    for(var i = 0; i < fields.length; i++) {
      if(fields[i].innerHTML.indexOf(fieldName) !== -1) {
        fields[i].innerHTML = "<h4>" + newValue + "</h4>";
        break;
      }
    }
  var fields = section.getElementsByTagName("p");
    for(var i = 0; i < fields.length; i++) {
      if(fields[i].innerHTML.indexOf(fieldName2) !== -1) {
        fields[i].innerHTML = "<p>" + newValue2 + "</p> ";
        break;
      }
    }
    for(var i = 0; i < fields.length; i++) {
      if(fields[i].innerHTML.indexOf(fieldName3) !== -1) {
        fields[i].innerHTML = "<p>" + newValue3 + "</p> ";
        break;
      }
    }

  break
  case "habilidadesSeccion":
    var fields = section.getElementsByTagName("li");
    for(var i = 0; i < fields.length; i++) {
      if(fields[i].innerHTML.indexOf(fieldName) !== -1) {
        fields[i].innerHTML = "<li>" + newValue + "</li>";
        break;
      }
    }

  break

  default :
  break
  }
}

//Función para eliminar un campo existente en una sección específica
function deleteField(sectionId, fieldName) {
  var section = document.getElementById(sectionId);
  var fields = section.getElementsByTagName("div");
  for(var i = 0; i < fields.length; i++) {
    if(fields[i].innerHTML.indexOf(fieldName) !== -1) {
      section.removeChild(fields[i]);
      break;
    }
  }
}

const boton = document.querySelector('#boton')
const foto = document.querySelector('#foto')
const nombre = document.querySelector('#nombre')
const correo = document.querySelector('#correo')
const celu = document.querySelector('#celu')

const generarUsuario = async () => {
  const url = 'https://randomuser.me/api/?nat=ar';
  const respuesta = await fetch(url);
  const { results } = await respuesta.json();
  const data = results[0]
  console.log(data)

foto.src = data.picture.medium
nombre.textContent = data.name.first
correo.textContent = data.email
celu.textContent = data.phone

  //return data;
}
boton.addEventListener('click',generarUsuario)
//document.addEventListener('DOMContentLoaded',generarUsuario)
//Validar formulario de contacto

let form = document.getElementById("contactameForm");
let nombreForm = document.getElementById("nombreForm");
let emailForm = document.getElementById("emailForm");
let mensajeForm = document.getElementById("mensajeForm");

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