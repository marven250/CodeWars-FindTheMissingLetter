function findMissingLetter(array) {
    let arr = []
    let answer
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let numbers = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16,
        q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    for (let i = 0; i < array.length; i++) arr.push(numbers[array[i].toLowerCase()])
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - arr[i + 1] == -2) answer = (arr[i])
    }
    console.log(answer)
    if (array[0] == array[0].toUpperCase()) return alpha[answer].toUpperCase()
    return alpha[answer]
    //Started with object, but couldn't properly use indexof method to extract answer at 
    //the end so I made string of aphabet to finish solving instead
}