interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}
const rect1: Rect = {
    id: "1234",
    size:{
        width: 4,
        height:5
    }
} 

const rect3 = {} as Rect
const rect4 = <Rect> {}

interface rbc extends Rect{
    getArea: () => number
}
const rect5: rbc ={
    id:"2",
    size:{
        width:4,
        height:6
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
} 


interface IClock {
    time: Date
    SetTime(date: Date): void
}
class Clock implements IClock{
    time: Date = new Date()
    SetTime(date: Date): void {
        this.time = date
    }
}

interface Styles{
    [key: string]:string
}

const css = {
    border: "1px solid black",
    marginTop: "2px"
}
