let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let mapa = document.querySelector('#mapa');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;


nome.style.width = '100%';
email.style.width = '100%';
assunto.style.width = '100%';

function validaNome() {
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 2) {
        txtNome.innerHTML = 'Nome inválido';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = 'Nome válido';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'E-mail válido';
        txtEmail.style.color = 'blue';
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Máximo de caracteres: 100'
        txtAssunto.style.color = 'red';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso')
    } else {
        alert('Preencha o formulário corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '800px';
    mapa.style.height = '600px';
}

function mapaNormal(){
    mapa.style.width = '350px';
    mapa.style.height = '200px';
}