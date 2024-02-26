function todos() {
    encriptarTexto();
    mostrarOcultar();
}

function encriptarTexto(texto) {
    texto = document.getElementById('textoEncriptar').value;
    console.log(texto); 

    const mapObj = {
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"
     };

   //Utilizamos el método replace, a la cuál em vez de pasarle un string, le psamos una función
   //el return retorna la propiedad del valor con el que coincida
   texto = texto.replace(/a|e|i|o|u/g, function (matched) {
        //se utilizan los corchetes "[]"" para un buen funcionaiento de la notación de corchetes para un objeto.
        return mapObj[matched];
   });  
    
    let textoEncriptado = document.getElementById('textoEncriptado');
    textoEncriptado.value = texto;
    document.getElementById('textoEncriptar').value = "";
}

//------------------------------------------------------------------------------------------------------------
function desencriptarTexto(texto) {
    texto = document.getElementById('textoEncriptar').value;
    console.log(texto); 

    const mapObj = {
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
     };

   //Utilizamos el método replace, a la cuál em vez de pasarle un string, le psamos una función
   //el return retorna la propiedad del valor con el que coincida
   texto = texto.replace(/ai|enter|imes|ober|ufat/g, function (matched) {
        //se utilizan los corchetes "[]"" para un buen funcionaiento de la notación de corchetes para un objeto.
        return mapObj[matched];
   });  
    
    let textoEncriptado = document.getElementById('textoEncriptado');
    textoEncriptado.value = texto;
    document.getElementById('textoEncriptar').value = "";
}

desencriptarTexto();


//------------------------------------------------------------------------------------------------------------
function mostrarOcultar() {
    let div1 = document.getElementById("textoNoEncontrado");
    let div2 = document.getElementById("textoCifrado");

    if (div1.style.display === "block") {
        div2.style.display="none"
    } else if(div2.style.display="block"){
        div1.style.display="none"
    }
}

encriptarTexto();

function copiar(texto) {
    navigator.clipboard.writeText(texto = document.getElementById('textoEncriptado').value)
  .then(() => {
    console.log('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
    return texto
}

copiar();

function removerAcentos(texto) {
    return texto.replace(/[ÀÁÂÃÄÅ]/g, 'A')
        .replace(/[àáâãäå]/g, 'a')
        .replace(/[ÈÉÊË]/g, 'E')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ÌÍÎÏ]/g, 'I')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[ÒÓÔÕÖ]/g, 'O')
        .replace(/[òóôõö]/g, 'o')
        .replace(/[ÙÚÛÜ]/g, 'U')
        .replace(/[ùúûü]/g, 'u');
}

function removerCaracteresEspeciales(texto) {
    if (typeof texto != "string") {
        return null;
    }

    var patron = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;
    return texto.replace(patron, '');
}

function incio(){
    document.getElementById('textoEncriptar').addEventListener('keyup',function(){
      this.value = removerAcentos(this.value)
      this.value = removerCaracteresEspeciales(this.value)
      this.value = this.value.toLowerCase();
    },true);

}

incio();