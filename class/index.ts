class Typescript {
    version: string
    constructor (version:string){
        this.version = version
    }
    info(name:string){
        return name + "hello world"
    }
}
// class Car{
//     readonly model: string
//     readonly wheels: number = 4
//     constructor(model: string){
//         this.model = model
//     }
// }
class Car{
    readonly wheels: number = 4
    constructor (readonly model: string){}
}
class Animal{
    protected voice: string = ''
    public color: string = 'black'
    private go(){
        console.log("go")
    }
    constructor(){
        this.go()
    }
}
class Cat extends Animal{
    public setVoice(voice:string):void{
        this.voice = voice
    }
}
const cat = new Cat()
console.log(cat.color)

abstract class Component {
    abstract render():void
    abstract info(): string
}
class AppComponent extends Component{
    render(): void{
        console.log("comp")
    }
    info(){
        return "[info]" 
    }
}