function entrar() {


    document.getElementById('texto_customizado').style.fontSize = '18px'
    document.getElementById('texto_customizado').style.transition = '1s'
    document.querySelector('#texto_customizado').className = 'lead mt-4 btn text-dark  btn-outline-warning'
    

}

function sair() {

    document.getElementById('texto_customizado').style.fontSize = '16px'
    document.getElementById('texto_customizado').style.transition = '1s'
    document.querySelector('#texto_customizado').className = 'lead mt-4 btn text-light  btn-outline-warning'
}