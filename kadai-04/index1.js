const product =(a,b) => {
    return a*b
}

console.log(product(56955,65415))

const sum = (n) => {
    let result = 0
    for (let index = 1; index < n + 1; index = index + 1) {
        result = result + index
    }
    return result
}

console.log(sum(10))