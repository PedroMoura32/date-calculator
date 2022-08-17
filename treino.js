let abertura = new Date(2022,08-1,16)
let validade = new Date(2023,08-1,16)
let milissegundos = Math.abs(validade - abertura)
let dias = Math.ceil(milissegundos / (1000 * 60 * 60 * 24))
let quantidadeDeDias = 10
let somaDias = abertura.setDate(abertura.getDate() + quantidadeDeDias)

console.log('Abertura medicamento', abertura)
console.log('Validade medicamento', validade)
console.log('Milissegundos Diff', milissegundos)
console.log('Dias diff', dias)
console.log('Soma de dias', formatDate(new Date(somaDias)))

function formatDate(date) {
    let newDate = new Date(date)
    return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
}