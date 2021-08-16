const str1: string = "hello"
console.log(str1)

let isFetching: boolean = true
let ff: number = 3.2

const numberArray: number[] = [1,2,3,4,5]
const numberArray2: Array<number> = [1,2,3,4,5]

const contact:[string, number]  = ["Sergey", 3456]

let variable: any = 42
variable = "str"
function HelloWorld(name:string): string {
    return "Hello world, " + name+"!"
}
console.log(HelloWorld("petra"))
function throwError(message:string):never {
    throw new Error(message)
}
type Login = string

const login: Login = "admin"

type ID = string | number

const id1:ID = 2

const id2:ID = "ggg"

type SomeBB = string | null | undefined