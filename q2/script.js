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
    vetor[vetor.length] = valor
    renderVetor()
}


function unshiftValue(){
    const valor = document.querySelector("#valor").value 
    vetor[4] = vetor[3]
    vetor[3] = vetor[2]
    vetor[1] = vetor[1]
    vetor[1] = vetor[0]
    vetor[0] = valor
    for (let i = vetor.length; i > 0; i--) {
        vetor[i] = vetor[i-1]
    }
    renderVetor()
}

// function popValue(){
//     vetor.pop()
//     renderVetor()
// }

// function unshiftValue(){
//     const valor = document.querySelector("#valor").value 
//     vetor.push(valor)
//     renderVetor()
// }

// function shiftValue(){
//     const valor = document.querySelector("#valor").value 
//     vetor.push(valor)
//     renderVetor()
// }


