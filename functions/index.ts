function add(a:number, b:number):number {
    return a + b;
}
interface myPosition {
    x:number | undefined
    y:number | undefined
}
interface MyPosDef extends myPosition{
    default: string
}

function position (): myPosition
function position (a:number): MyPosDef
function position (a:number, b:number): myPosition

function position(a?:number, b?:number){
 if(!a && !b){
     return {x:undefined, y:undefined}
 }
 if (a&&!b){
     return {
         x:a,
         y: undefined,
         default: a.toString()
     }
 }
 return {x:a, y:b}
}