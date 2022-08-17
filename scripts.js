// Sabrina's Project
// recebe uma data, a partir desta data verifica a quantidade de meses até a data atual a
// a quantidade de meses restantes é dividida por 100 depois multiplicada por 25 e por fim
// somada com a data atual

const form = document.getElementById('form')
const dateValidate = document.getElementById('date-validate')
const dateOpened = document.getElementById('date-opened')
const response = document.getElementById('response')

function formatDate(date) {
    let newDate = new Date(date.value.replace(/-/g, ','))
    return `${newDate.getFullYear()},${newDate.getMonth()+1},${newDate.getDate()}`
}
function formatDateBR(date) {
    let newDate = new Date(date)
    return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
}

function calculaDiff(dtOpened, dtValidate) {
    let days = Math.abs(dtValidate - dtOpened)
    return Math.ceil(days / (1000 * 60 * 60 * 24)) 
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()

    const valid = new Date(formatDate(dateValidate))
    const opened = new Date(formatDate(dateOpened))
    
    const days = calculaDiff(opened, valid)

    const newValidate = opened.setDate(opened.getDate() + (days * 0.25))

    response.innerText = `Nova Data de Validade do medicamento: ${formatDateBR(newValidate)}`
})

function checkInputs() {
    const dateValue = date.value
    const daysValue = days.value

    if (dateValue === '') {
        setErrorFor(date, "Data obrigatória!")
    } else {
        setSuccessFor(date)
    }

    if (daysValue === '') {
        setErrorFor(days, "Quantidade de dias obrigatório!")
    } else if(daysValue <= 0) {
        setErrorFor(days, 'Valor não pode ser menor ou igual a 0(zero)!')
    } else {
        setSuccessFor(days)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    // Adicionar mensagem de error
    small.innerText = message

    // Adicionar a classe de erro
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement

    // Adicinando classe de sucesso
    formControl.className = 'form-control success'
}