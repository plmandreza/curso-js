let num = [5, 8, 2, 9, 3]
//num.sort()
num.push(1)
num.sort()
console.log(num)
//console.log(`Nosso vetor é o ${num}`) // template string
console.log(`O vetor tem ${num.length} posições`)
//console.log(num.sort())
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*f or(let pos=0; pos<num.length; pos++) { // estrutura de repetição for tem 3 elementos -> inicialização, teste lógico e incremento
    console.log(num[pos]) // num no índice/chave pos 
} */

/* let pos = num.indexOf(4)
    if (pos == -1) {
        console.log(`O valor não foi encontrado!`) 
    } else {
        console.log(`O valor está na posição ${pos}`)
} */

let pos = num.indexOf(8)
    if (pos == -1) {
        console.log(`O valor não foi encontrado!`) 
    } else {
        console.log(`O valor está na posição ${pos}`)
}

