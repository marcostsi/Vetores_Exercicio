vetor = []

// function renderValor() {
//     const valor = document.querySelector("#valor").value 
//     vetor.push(valor)

//     const div = document.querySelector("#array")
//     div.innerHTML = ""
//     for (let elemento of vetor) {
//         const pTemp = document.createElement("p")
//         pTemp.innerHTML = elemento
//         div.appendChild(pTemp)
//     }
// }

// function pushValue () {
//     const valor = document.querySelector("#valor").value 
//     vetor.push(valor)
//     renderValor()
// }

// const pushButton = document.querySelector("#pushButton")
// pushButton.addEventListener("click", pushValue)

function pushValue(){
    const valor = document.querySelector("#valor").value 
    vetor.push(valor)

    const div = document.querySelector("#array")
    div.innerHTML = ""
    for (let elemento of vetor) {
        const pTemp = document.createElement("p")
        pTemp.innerHTML = elemento
        div.appendChild(pTemp)
    }
}

function popValue(){
    const valor = document.querySelector("#valor").value 
    vetor.push(valor)

    const div = document.querySelector("#array")
    div.innerHTML = ""
    for (let elemento of vetor) {
        const pTemp = document.createElement("p")
        pTemp.innerHTML = elemento
        div.appendChild(pTemp)
    }
}