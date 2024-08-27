function criptografar() {
    let texto = document.getElementById("caixatexto").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("caixaresposta").value = textoCriptografado;
    
}

function descriptografar() {
    let textoCriptografado = document.getElementById("caixatexto").value;
    let textoOriginal = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("caixaresposta").value = textoOriginal;

}

const botaocop=document.getElementById("botaocop")

const caixaresposta = document.getElementById("caixaresposta");

botaocop.addEventListener("click", (evt) => {
    const texto = caixaresposta.value;
    
    if (texto.trim() === "") {

        alert("O campo está vazio. Não há nada para copiar.");

    } else {
        navigator.clipboard.writeText(texto).then(() => {

            alert("Texto copiado para a área de transferência!");

        }).catch(err => {
            console.error("Erro ao copiar texto: ", err);

        });
    }
});
























// const botaocrip=document.getElementById("botaocrip")

// const botaodescrip=document.getElementById("botaodescrip")