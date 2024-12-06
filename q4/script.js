vetor = [1,2,3,4,5,6,10,12,12,14,10]

function renderVetor(){
    const div = document.querySelector("#array")
    div.innerHTML = ""
    for (let elemento of vetor) {
        const pTemp = document.createElement("p")
        pTemp.innerHTML = elemento
        div.appendChild(pTemp)
    }
}
renderVetor()

function dobrarNumeros(){
    vetor = vetor.map((x) => x * 2);
    console.log(vetor)
    renderVetor()
}


function filtrarMaioresQueDois(){
    vetor = vetor.filter((valor) => valor > 2)
    console.log(vetor)
    renderVetor()
}

function encontrarPrimeiroMaiorQueDois(){
    s = vetor.find((valor) => valor > 2)
    console.log(s)
    vetor = [s]
    renderVetor()
}

function somarElementos(){
    const somar = vetor.reduce((acc, valor) => acc + valor, 0)
    console.log(somar)
    renderVetor()
}

function adicionarUm(){
    vetor = vetor.map((x) => x + 1);
    console.log(vetor)
    renderVetor()

}

function criarObjetos(){
    const abc = vetor.map((x) => ({
        a: x,
    }));
    console.log(abc)
}

function logarPares(){
    numero = vetor.filter((numero) => numero % 2 === 0)
    console.log(numero)
    renderVetor
}