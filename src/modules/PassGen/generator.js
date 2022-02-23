const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBER = '0123456789'
const SYMBOL = '-_#$%&()*+<=>?@'

function isCheck(input, name) {
    return input.getAttribute('name') === name && input.checked
}

export function generator(length, inputOutput, inputCheck) {
    let allChar = ''
    inputCheck.forEach(input => {
        if (isCheck(input, 'lowercase')) {
            allChar += LOWERCASE
        }
        if (isCheck(input, 'uppercase')) {
            allChar += UPPERCASE
        }
        if (isCheck(input, 'number')) {
            allChar += NUMBER
        }
        if (isCheck(input, 'symbol')) {
            allChar += SYMBOL
        }
    })

    let passgen = ''
    for (let i = 0; i < length; i++) {
        passgen += allChar.charAt(Math.floor(Math.random() * allChar.length))
    }
    inputOutput.value = passgen
}
