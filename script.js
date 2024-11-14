vetor = []


function renderVetor(){
    const div = document.querySelector("#array")
    div.innerHTML = ""
    for (let elemento of vetor) {
        const pTemp = document.createElement("p")
        pTemp.innerHTML = elemento
        div.appendChild(pTemp)
    }
}

function pushValue(){
    const valor = document.querySelector("#valor").value 
    vetor.push(valor)
    renderVetor()
}

function popValue(){
    vetor.pop()
    renderVetor()
}

function unshiftValue(){
    const valor = document.querySelector("#valor").value 
    vetor.push(valor)
    renderVetor()
}

function shiftValue(){
    const valor = document.querySelector("#valor").value 
    vetor.push(valor)
    renderVetor()
}


