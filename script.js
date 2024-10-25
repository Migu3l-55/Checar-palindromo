function get_input() {
     input = document.getElementById("input").value
     return input
}

function exibir_verificacao(texto) {
    document.getElementById("output").innerHTML = texto;
}

function verificar() {
    let input =  get_input()
    let reverso = [];

    for (let i = input.length - 1; i >= 0; i--) {
        reverso.push(input[i])
    }
    
    // preciso fazer checar se cada index nos dois arrays 
    // é parecido, é palindromo se todos forem.
    for (let i in input) {
        if (input[i] != reverso[i]) {
            exibir_verificacao("não é palindromo!")
        }
    }
    
}