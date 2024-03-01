let textarea = document.getElementById('textarea-main')
let result = document.getElementById('result');
let resultSpan = document.getElementById('result-span');
let asideImg = document.getElementById('aside-img');
let asideText = document.getElementById('aside-text');
let texto;

function prepararTexto(){
    texto = textarea.value;
    result.classList = 'flex';
    asideImg.classList = 'hidden';
    asideText.classList = 'hidden';
}
function corrigirTextoInvalido(texto){
    var regex = /^[a-z\s]+$/;

    if(!regex.test(texto)){
        alert('O texto está vazio ou contém caracteres especiais ou letras maiuculas, corriga o texto por favor!');
        exibir();
    }else{
        return texto;
    }
    
}
//Função para criptografar o texto
function criptar(){
    prepararTexto();
    const resultado = corrigirTextoInvalido(texto).replace(/e/g , 'enter')
                           .replace(/i/g , 'imes')
                           .replace(/a/g , 'ai')
                           .replace(/o/g , 'ober')
                           .replace(/u/g , 'ufat');

    console.log(resultado);
    resultSpan.innerText = resultado;
    clear();
}
//Função para decriptografar o texto
function decriptar(){
    prepararTexto();
    const resultado = corrigirTextoInvalido(texto).replace(/enter/g , 'e')
                           .replace(/imes/g , 'i')
                           .replace(/ai/g , 'a')
                           .replace(/ober/g , 'o')
                           .replace(/ufat/g , 'u');

    console.log(resultado);
    resultSpan.innerText = resultado;
    clear();
}
//Função para limpar o texto da textarea
function clear() {
    textarea.value = '';
}
//função para exibir as imagens após copiar o texto
function exibir(){
    result.classList = 'hidden';
    asideImg.classList = 'block';
    asideText.classList = 'block';
}
//função para copiar o texto
async function copyText() {
    let campoTexto = resultSpan.innerText;
    try {
        await 
    navigator.clipboard.writeText(campoTexto);
        alert("Texto copiado para a área de transferência!");
        exibir();
    } catch (err) {
        console.error("Erro ao copiar o texto:", err);
    }
};