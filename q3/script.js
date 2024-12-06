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

function sortValue() {
    const valor = document.querySelector("#valor").value
    vetor[vetor.length] = valor
    renderVetor()
}

function filterValue(){
    vetor = vetor.filter((vetor) => vetor > 10);
    console.log(vetor);
    renderVetor()

}

function mapValue(){
    // const valor = document.querySelector("#valor").value
    vetor = vetor.map((x) => x * 2);
    console.log(vetor)
    renderVetor()
}

function findValue() {
    const findValor = vetor.find((element) => element === 10);
    console.log(findValor)
    vetor = [findValor]
    renderVetor()
}

function reduceValue(){
    const valorReduce = vetor.reduce((acc, valor)=> acc + valor, 0)
    console.log(valorReduce)
    vetor = [valorReduce]
    renderVetor()
}