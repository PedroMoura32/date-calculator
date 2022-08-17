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

    const h3 = document.querySelector('h3')
    const h4 = document.querySelector('h4')

    h4.innerText = `Nova Data de Validade do medicamento`
    h3.innerText = formatDateBR(newValidate)
    h3.style.color = 'red'
    // response.style.backgroundColor = '#EAD469'
})

function checkInputs() {
    const validate = dateValidate.value
    const opened = dateOpened.value

    if (validate === '') {
        setErrorFor(dateValidate, "Data de Validade obrigatória!")
    } else {
        setSuccessFor(dateValidate)
    }

    if (opened === '') {
        setErrorFor(dateOpened, "Data de Abertura obrigatória!")
    } else {
        setSuccessFor(dateOpened)
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
