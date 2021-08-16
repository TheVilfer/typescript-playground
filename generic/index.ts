const arr: Array<number> = [1,1,2,3,5]
const arr2: Array<string> = ["1","2","3"]

function reverse<T>(arr: T[]): T[]{
    return arr.reverse()
}
console.log( reverse(arr2))