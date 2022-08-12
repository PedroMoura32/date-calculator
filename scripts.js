// Sabrina's Project
// recebe uma data, a partir desta data verifica a quantidade de meses até a data atual a
// a quantidade de meses restantes é dividida por 100 depois multiplicada por 25 e por fim
// somada com a data atual


// const initialDate = new Date('2022-01-01')
// const sumTime = new Date()

// const newDate = new Date(Math.abs(initialDate.getTime() + 2628000000))

// // alert(newDate)

const form = document.getElementById('form')
const date = document.getElementById('date')
const days = document.getElementById('days')
const response = document.getElementById('response')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // checkInputs()

    response.innerText = date.value
})

// function checkInputs() {
//     const dateValue = date.value
//     const daysValue = days.value

//     if (dateValue === '') {
//         setErrorFor(date, "Data obrigatória!")
//     } else {
//         setSuccessFor(date)
//     }

//     if (daysValue === '') {
//         setErrorFor(days, "Quantidade de dias obrigatório!")
//     } else if(daysValue <= 0) {
//         setErrorFor(days, 'Valor não pode ser menor ou igual a 0(zero)!')
//     } else {
//         setSuccessFor(days)
//     }
// }

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

// form.addEventListener('click', (e) => {
    
//     response.innerHTML = days.value
// })