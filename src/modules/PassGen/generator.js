const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBER = '0123456789'
let allChar = ''

export function generator(obj = {}, length) {
    const {lowercase, uppercase, number} = obj

    if (lowercase) {
        allChar += LOWERCASE
    }
    if (uppercase) {
        allChar += UPPERCASE
    }
    if (number) {
        allChar += NUMBER
    }

    let passgen = ''
    for (let i = 0; i < length; i++) {
        passgen += allChar.charAt(Math.floor(Math.random() * allChar.length))
    }
    return passgen
}
