const data = [4, 8, 15, 16, 23, 42]; 

function buscarNumero(numero) {
    let comparacoes = 0; 
    for (let i = 0; i < data.length; i++) {
        comparacoes++; 
        if (data[i] === numero) {
            return { encontrado: true, comparacoes }; 
        }
    }

    return { encontrado: false, comparacoes };
}

document.getElementById("searchButton").addEventListener("click", () => {
    const numero = parseInt(document.getElementById("searchNumber").value);
    const resultado = buscarNumero(numero);

    const resultElement = document.getElementById("result");
    if (resultado.encontrado) {
        resultElement.textContent = `Número ${numero} encontrado com ${resultado.comparacoes} comparações.`;
    } else {
        resultElement.textContent = `Número ${numero} não encontrado após ${resultado.comparacoes} comparações.`;
    }
});