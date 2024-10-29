function get_input() {
     input = document.getElementById("input").value
     return input
}

function exibir_verificacao(texto) {
    document.getElementById("output").innerHTML = " "+ texto;
}

function mostrar_palavra_reversa(palavra_correta, palavra_reversa) {
    document.getElementById("palavra-reversa").innerHTML = `${palavra_correta} ao contrario é: ${palavra_reversa}`;
}

function verificar() {
    let input =  get_input()
    const reverso = [];
    let palavra_reversa = "";
    let diagnostico = "é palindromo"

    for (let i = input.length - 1; i >= 0; i--) {
        reverso.push(input[i])
    }
    
    for (let i in input) {
        if (input[i] != reverso[i]) {
            diagnostico = "não é palindromo"
        }
    }
    exibir_verificacao(diagnostico)

    for (let i in reverso) {
        palavra_reversa += reverso[i]
    }
    mostrar_palavra_reversa(input, palavra_reversa)
}