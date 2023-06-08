const textareaSalida = document.getElementById("salida");
const copia = document.getElementById("copiar");
copia.style.display = "none";

function ValidarDatos() {
  const entrada = document.getElementById("entrada").value;
  const chequeo = /^[a-z]*$/;

  if (!chequeo.test(entrada)) {
    alert("Solo se permiten letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

function Encriptador(text) {
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      switch (char) {
        case "e":
          encryptedText += "enter";
          break;
        case "i":
          encryptedText += "imes";
          break;
        case "a":
          encryptedText += "ai";
          break;
        case "o":
          encryptedText += "ober";
          break;
        case "u":
          encryptedText += "ufat";
          break;
        default:
          encryptedText += char;
      }
    }
    return encryptedText;
  }

  function Descifrador(text) {
    let decryptedText = "";
    let i = 0;
    while (i < text.length) {
      const char = text[i];
      if (char === "e" && text.substring(i, i + 5) === "enter") {
        decryptedText += "e";
        i += 5;
      } else if (char === "i" && text.substring(i, i + 4) === "imes") {
        decryptedText += "i";
        i += 4;
      } else if (char === "a" && text.substring(i, i + 2) === "ai") {
        decryptedText += "a";
        i += 2;
      } else if (char === "o" && text.substring(i, i + 4) === "ober") {
        decryptedText += "o";
        i += 4;
      } else if (char === "u" && text.substring(i, i + 4) === "ufat") {
        decryptedText += "u";
        i += 4;
      } else {
        decryptedText += char;
        i++;
      }
    }
    return decryptedText;
  }

function encriptar() {
  const texto = document.getElementById("entrada").value;
  const resultado = Encriptador(texto);

  if (texto === "") {
    alert("NO HA INGRESADO NINGUNA INFORMACIÓN");
  } else {
    document.getElementById("salida").value = resultado;
  }

  copia.style.display = "block";
  mostrarImagen();
}

function descifrar() {
  const texto = document.getElementById("entrada").value;
  const resultado = Descifrador(texto);

  if (texto === "") {
    alert("NO HA INGRESADO NINGUNA INFORMACIÓN");
  } else {
    document.getElementById("salida").value = resultado;
  }

  mostrarImagen();
}

function copyText() {
  const resultTextarea = document.getElementById("salida");
  resultTextarea.select();
  document.execCommand("copy");
  resultTextarea.value = "";
  alert("Copiado al portapapeles");

  mostrarImagen();
}

function mostrarImagen() {
  if (textareaSalida.value !== "") {
    textareaSalida.style.backgroundImage = "none";
  } else {
    textareaSalida.style.backgroundImage = 'url("img/ImgMuñeco.jpg")';
    textareaSalida.style.backgroundRepeat = "no-repeat";
    textareaSalida.style.backgroundPosition = "center center";
    // textarea.style.objectFit = "cover";
    textareaSalida.style.backgroundSize = "contain";

  }
}

window.addEventListener("load", function() {
  mostrarImagen();
});