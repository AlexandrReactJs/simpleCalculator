let buttonsStr = 'C CE = + 1 2 3 - 4 5 6 * 7 8 9 / 0'
let buttonsArray = buttonsStr.split(' ')
let buttonsDiv = document.querySelector('.buttons')

let buttonstHTML = buttonsArray.map(el => buttonsDiv.insertAdjacentHTML('beforeend', `<button value=${el}>${el}</button>`))
let output = document.querySelector('input')


const calc = (value) => {
    if(value === '=') {
       output.value = math.evaluate(output.value)
    }else if (value === 'C') {
        output.value = ''
    }else if (value === 'CE') {
        output.value = output.value.substring(0, output.value.length - 1)
    }
    else{
        output.value = output.value + value
    }
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (value) => {
        calc(value.target.innerText)

    })
})


