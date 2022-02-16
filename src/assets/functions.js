export const arrayDataSelect = (arr = []) => {
    let start = arr[0]
    let end = arr[1]

    if (start <= 5) {
        throw new Error(`Select: select: [${start}, end]. ${start} number must not be less than 6.`)
    }
    if (!parseInt(start) || !parseInt(end)) {
        throw new Error(`Select: ${start} or ${end} is not number.`)
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        throw new Error('Select: Numbers must be integers.')
    }

    let dataArr = []
    while (start <= end) {
        let obj = {id: `${start}`, value: `${start}`}
        dataArr.push(obj)
        start++
    }
    return dataArr
}
