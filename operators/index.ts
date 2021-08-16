interface Person {
    name: string
    age: number
}
type PersonKeys = keyof Person

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}
type UserKeys = Exclude<keyof User, '_id'|'createdAt'>