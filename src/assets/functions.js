export const arrayDataSelect = (arr = []) => {
    let start = arr[0]
    let end = arr[1]

    if (start <= 0) {
        new Error(`Select: select: [${start}, end]. ${start} number must not be less than 6.`)
    } else if (!Number.isInteger(start) || !Number.isInteger(end)) {
        new Error('Select: Numbers must be integers.')
    } else if (!parseInt(start) || !parseInt(end)) {
        new Error(`Select: ${start} or ${end} is not number.`)
    }

    let dataArr = []
    while (start <= end) {
        let obj = {id: `${start}`, value: `${start}`}
        dataArr.push(obj)
        start++
    }
    return dataArr
}
