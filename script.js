var textInput = document.querySelector("#entrada__texto");
var outInput = document.querySelector("#saida");

function criptografar(){
    var texto = textInput.value;

    var resultadoCripto = texto.replace(/e/g, "wbbk").replace(/i/g, "lbb").replace(/a/g, "db")
    .replace(/o/g, "lol").replace(/u/g, "jar");

    document.getElementById("saida").innerHTML = '<textarea readonly id="entrada__texto">' + resultadoCripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}


function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/wbbk/g, "e").replace(/lbb/g, "i").replace(/db/g, "a")
    .replace(/lol/g, "o").replace(/jar/g, "u");

    document.getElementById("saida").innerHTML = '<textarea readonly id="entrada__texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function btnLimpar() {
    window.location.reload();
    resultadoCripto.value = "";
    resultDescripto.value = "";
}


function copiar() {
    var resultadoCopiar = document.querySelector("#saida textarea");

    try {
        navigator.clipboard.writeText(resultadoCopiar.value);
        alert("Texto copiado: " + resultadoCopiar.value);
    } catch (err) {
        console.error('Erro ao copiar: ', err);
    }
}